'use client';
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Great_Vibes } from "next/font/google";
import Footer from "../components/Footer";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

interface StorySection {
    title: string;
    text: string;
    image: string;
}

const heroImage = `https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80&fit=crop`;

const storySections: StorySection[] = [
    {
        title: `The Beginning`,
        text: `My journey into fashion began with a simple belief: that what we wear is more than just fabric and thread—it's a form of self-expression, a way to tell our story to the world. This philosophy became the foundation of LIATI, where "Love is all there is" isn't just a tagline, but a way of life.`,
        image: `https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80&fit=crop`,
    },
    {
        title: `The Vision`,
        text: `I envisioned creating a space where fashion meets purpose, where every piece tells a story of love, creativity, and authenticity. LIATI became that space—a collection of carefully curated brands that celebrate individuality and help people express their unique style and personality.`,
        image: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80&fit=crop`,
    },
    {
        title: `Our Brands`,
        text: `Each brand under the LIATI umbrella represents a different facet of personal expression. From the intricate beauty of Braid Me to the playful creativity of LIATI Fun & Accessories, every piece is chosen with intention and love.`,
        image: `https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80&fit=crop`,
    },
    {
        title: `The Future`,
        text: `As we continue to grow, our mission remains the same: to create beautiful, meaningful fashion that empowers people to express their authentic selves. Because when you feel good in what you wear, you can share that love with the world.`,
        image: `https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1920&q=80&fit=crop`,
    },
];

const TOTAL_SLIDES = storySections.length + 1; // hero + 4 stories

function useHorizontalSlide(
    containerRef: React.RefObject<HTMLDivElement | null>,
    slideCount: number,
    currentSlide: number,
    setCurrentSlide: (index: number) => void,
) {
    const isDragging = useRef(false);
    const startX = useRef(0);
    const dragOffset = useRef(0);
    const trackRef = useRef<HTMLDivElement | null>(null);

    const setTrackRef = useCallback((el: HTMLDivElement | null) => {
        trackRef.current = el;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const onMouseDown = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(`button, a, input`)) return;
            isDragging.current = true;
            startX.current = e.clientX;
            dragOffset.current = 0;
            container.style.cursor = `grabbing`;
            track.style.transition = `none`;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            e.preventDefault();
            dragOffset.current = e.clientX - startX.current;
            const baseOffset = -currentSlide * container.clientWidth;
            track.style.transform = `translateX(${baseOffset + dragOffset.current}px)`;
        };

        const onMouseUp = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            container.style.cursor = `grab`;
            track.style.transition = ``;

            let targetIndex = currentSlide;
            if (dragOffset.current < -1) {
                targetIndex = Math.min(currentSlide + 1, slideCount - 1);
            } else if (dragOffset.current > 1) {
                targetIndex = Math.max(currentSlide - 1, 0);
            }

            track.style.transform = `translateX(-${targetIndex * 100}%)`;
            setCurrentSlide(targetIndex);
        };

        // Touch swipe
        let touchStartX = 0;

        const onTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
            track.style.transition = `none`;
        };

        const onTouchMove = (e: TouchEvent) => {
            const deltaX = e.touches[0].clientX - touchStartX;
            const baseOffset = -currentSlide * container.clientWidth;
            track.style.transform = `translateX(${baseOffset + deltaX}px)`;
        };

        const onTouchEnd = (e: TouchEvent) => {
            track.style.transition = ``;
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const threshold = 30;

            let targetIndex = currentSlide;
            if (deltaX < -threshold) {
                targetIndex = Math.min(currentSlide + 1, slideCount - 1);
            } else if (deltaX > threshold) {
                targetIndex = Math.max(currentSlide - 1, 0);
            }

            track.style.transform = `translateX(-${targetIndex * 100}%)`;
            setCurrentSlide(targetIndex);
        };

        container.style.cursor = `grab`;
        container.addEventListener(`mousedown`, onMouseDown);
        window.addEventListener(`mousemove`, onMouseMove);
        window.addEventListener(`mouseup`, onMouseUp);
        container.addEventListener(`touchstart`, onTouchStart, { passive: true });
        container.addEventListener(`touchmove`, onTouchMove, { passive: true });
        container.addEventListener(`touchend`, onTouchEnd, { passive: true });

        return () => {
            container.removeEventListener(`mousedown`, onMouseDown);
            window.removeEventListener(`mousemove`, onMouseMove);
            window.removeEventListener(`mouseup`, onMouseUp);
            container.removeEventListener(`touchstart`, onTouchStart);
            container.removeEventListener(`touchmove`, onTouchMove);
            container.removeEventListener(`touchend`, onTouchEnd);
        };
    }, [containerRef, slideCount, currentSlide, setCurrentSlide]);

    return setTrackRef;
}

export default function MyStoryPage() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visitedSlides, setVisitedSlides] = useState<Set<number>>(new Set([0]));
    const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
    const [valuesVisible, setValuesVisible] = useState(false);

    const handleSetSlide = useCallback((index: number) => {
        setCurrentSlide(index);
        if (index > 0) setScrollIndicatorVisible(false);
        setVisitedSlides((prev) => {
            if (prev.has(index)) return prev;
            const next = new Set(prev);
            next.add(index);
            return next;
        });
    }, []);

    const setTrackRef = useHorizontalSlide(carouselRef, TOTAL_SLIDES, currentSlide, handleSetSlide);

    // Observe Our Values section for scroll-triggered fade-in
    useEffect(() => {
        const el = valuesRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setValuesVisible(true);
            },
            { threshold: 0.2 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const showLeftArrow = currentSlide > 0;
    const showRightArrow = currentSlide < TOTAL_SLIDES - 1;

    return (
        <div className="bg-slate-50 dark:bg-slate-900">
            {/* Horizontal Carousel */}
            <div
                ref={carouselRef}
                className="h-[100svh] w-full overflow-hidden relative select-none"
            >
                {/* Slide track */}
                <div
                    ref={setTrackRef}
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {/* Hero slide */}
                    <div
                        className="min-w-full h-full flex items-center justify-center relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImage})` }}
                    >
                        <div className="absolute inset-0 bg-black/80" />
                        <div className="absolute top-0 bottom-0 right-0 w-40 sm:w-56 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />

                        <div className="relative z-10 text-center px-6 sm:px-8">
                            <h1 className={`${greatVibes.className} text-5xl sm:text-6xl md:text-8xl text-white text-shadow mb-4 animate-fade-in-up`}>
                                My Story
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 text-shadow-sm font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: `300ms` }}>
                                The journey behind LIATI.<br />Where love meets fashion — and every thread tells a story.<br />Swipe to discover mine.
                            </p>
                        </div>
                    </div>

                    {/* Story slides */}
                    {storySections.map((section, index) => {
                        const slideIndex = index + 1;
                        const isLast = index === storySections.length - 1;
                        const isLeftAligned = index % 2 === 0;
                        const isActive = visitedSlides.has(slideIndex);

                        return (
                            <div
                                key={section.title}
                                className="min-w-full h-full flex items-center relative bg-cover bg-center"
                                style={{ backgroundImage: `url(${section.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/80" />
                                <div className="absolute top-0 bottom-0 left-0 w-40 sm:w-56 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
                                {!isLast ? (
                                    <div className="absolute top-0 bottom-0 right-0 w-40 sm:w-56 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
                                ) : (
                                    <div className="absolute top-0 bottom-0 right-0 w-40 sm:w-56 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
                                )}

                                <div className={`relative z-10 px-6 sm:px-16 md:px-24 lg:px-32 max-w-6xl w-full mx-auto ${isLeftAligned ? `text-left` : `text-right`}`}>
                                    <h2 className={`${greatVibes.className} text-4xl sm:text-5xl md:text-7xl text-white text-shadow mb-6 transition-all duration-700 ${isActive ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`}`}>
                                        {section.title}
                                    </h2>
                                    <p className={`text-base sm:text-lg md:text-xl text-white/85 text-shadow-sm leading-relaxed max-w-xl transition-all duration-700 delay-200 ${isActive ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`} ${isLeftAligned ? `` : `ml-auto`}`}>
                                        {section.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom fade to hint at content below */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900 pointer-events-none z-10" />

                {/* Left arrow — side on md+, bottom-left on mobile */}
                <button
                    onClick={() => handleSetSlide(currentSlide - 1)}
                    className={`absolute z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300 bottom-8 left-4 md:bottom-auto md:left-4 md:top-1/2 md:-translate-y-1/2 ${showLeftArrow ? `opacity-100` : `opacity-0 pointer-events-none`
                        }`}
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right arrow — side on md+, bottom-right on mobile */}
                <div
                    className={`absolute z-20 flex items-center gap-3 transition-all duration-300 bottom-8 right-4 md:bottom-auto md:right-4 md:top-1/2 md:-translate-y-1/2 ${showRightArrow ? `opacity-100` : `opacity-0 pointer-events-none`
                        }`}
                >
                    <span
                        className={`text-xs tracking-widest uppercase text-white/70 transition-opacity duration-500 hidden md:inline ${scrollIndicatorVisible ? `opacity-100` : `opacity-0`
                            }`}
                    >
                        Swipe
                    </span>
                    <button
                        onClick={() => handleSetSlide(currentSlide + 1)}
                        className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dot indicators + swipe hint on mobile */}
                <div className="absolute bottom-10 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                    <span
                        className={`text-xs tracking-widest uppercase text-white/70 transition-opacity duration-500 md:hidden ${scrollIndicatorVisible ? `opacity-100` : `opacity-0`
                            }`}
                    >
                        Swipe
                    </span>
                    <div className="flex items-center gap-2">
                        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleSetSlide(i)}
                                className={`rounded-full transition-all duration-300 ${i === currentSlide
                                    ? `w-3 h-3 bg-slate-800 dark:bg-white`
                                    : `w-2 h-2 bg-slate-800/40 hover:bg-slate-800/60 dark:bg-white/40 dark:hover:bg-white/60`
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Values — free scrolling */}
            <section
                ref={valuesRef}
                className="py-16 sm:py-24 flex items-center justify-center relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
            >
                <div className="relative z-10 px-6 sm:px-8 max-w-4xl mx-auto w-full">
                    <h2 className={`${greatVibes.className} text-3xl sm:text-5xl md:text-7xl text-slate-900 dark:text-white text-shadow text-center mb-6 sm:mb-12 transition-all duration-700 ${valuesVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`}`}>
                        Our Values
                    </h2>
                    <div className={`flex md:grid md:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 transition-all duration-700 delay-300 ${valuesVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`}`}>
                        <div className="min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-white/10 p-4 sm:p-6 text-center shadow-sm dark:shadow-none">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500 dark:text-rose-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3 className={`${greatVibes.className} text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3`}>Love</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">Every piece is created and chosen with love, reflecting our belief that love is all there is.</p>
                        </div>

                        <div className="min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-white/10 p-4 sm:p-6 text-center shadow-sm dark:shadow-none">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-500 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                                </svg>
                            </div>
                            <h3 className={`${greatVibes.className} text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3`}>Authenticity</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">We celebrate individuality and encourage people to express their true selves through fashion.</p>
                        </div>

                        <div className="min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-white/10 p-4 sm:p-6 text-center shadow-sm dark:shadow-none">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500 dark:text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            </div>
                            <h3 className={`${greatVibes.className} text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3`}>Sustainability</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">We&apos;re committed to responsible fashion that cares for people and the planet.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
