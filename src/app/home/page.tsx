'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes",
});

export default function HomePage() {
    return (
        <section className="relative flex items-center justify-center min-h-screen">
            {/* Main Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-6">
                {/* Welcome Text with Heart Background */}
                <div className="relative">
                    {/* Heart Background */}
                    <div
                        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] sm:w-[26rem] sm:h-[26rem] md:w-[34rem] md:h-[34rem] lg:w-[40rem] lg:h-[40rem] mix-blend-multiply dark:mix-blend-normal filter opacity-70 blur-xl -z-10"
                        style={{ animationDelay: `4s` }}
                    >
                        <svg className="w-full h-full text-rose-300 dark:opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>

                    {/* Welcome Text with Animations */}
                    <div className="space-y-3">
                        <h1 className={`${greatVibes.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-slate-900 dark:text-white animate-fade-in-up`}>
                            Welcome to
                        </h1>
                        <div className="animate-fade-in-up" style={{ animationDelay: `300ms` }}>
                            <Image
                                src="/liati.png"
                                alt="LIATI"
                                width={248}
                                height={97}
                                className="mx-auto w-[150px] sm:w-[200px] md:w-[248px] h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 dark:text-white max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: `700ms` }}>
                    Discover our carefully curated collection of fashion brands, each offering unique pieces
                    that help you express your personal style and personality. Explore what we offer,
                    or discover the story and passion behind it all.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: `1100ms` }}>
                    <Link
                        href="/brands"
                        className="flex items-center justify-center px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Explore Our Brands
                    </Link>
                    <Link
                        href="/my-story"
                        className="flex items-center justify-center px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base border-2 border-pink-500 text-pink-600 dark:text-pink-400 dark:border-pink-400 font-semibold rounded-full hover:bg-pink-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                    >
                        Learn My Story
                    </Link>
                </div>
            </div>
        </section>
    );
}
