'use client';
import React, { useState, FormEvent } from "react";
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState(``);
    const [status, setStatus] = useState<`idle` | `loading` | `success` | `error`>(`idle`);
    const [message, setMessage] = useState(``);

    const handleSubscribe = async (e: FormEvent) => {
        e.preventDefault();

        const trimmed = email.trim();
        if (!trimmed) {
            setStatus(`error`);
            setMessage(`Please enter your email address.`);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            setStatus(`error`);
            setMessage(`Please enter a valid email address.`);
            return;
        }

        setStatus(`loading`);
        setMessage(``);

        try {
            const res = await fetch(`/api/subscribe`, {
                method: `POST`,
                headers: { "Content-Type": `application/json` },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus(`success`);
                setMessage(data.message);
                setEmail(``);
            } else {
                setStatus(`error`);
                setMessage(data.error);
            }
        } catch {
            setStatus(`error`);
            setMessage(`Something went wrong. Please try again.`);
        }
    };

    return (
        <footer className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-6 py-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr] xl:grid-cols-3 gap-8 mb-8">
                    {/* Connect With Us */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold mb-1">Connect With Us</h3>
                        <div className="w-10 h-0.5 bg-white/40 rounded-full mb-4 mx-auto sm:mx-0" />
                        <div className="space-y-3 mb-5">
                            <div className="flex items-center justify-center sm:justify-start space-x-3">
                                <svg className="w-4 h-4 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:liati.business@gmail.com" className="text-sm text-pink-100 hover:text-white transition-colors">
                                    liati.business@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start space-x-3">
                                <svg className="w-4 h-4 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:289-698-4004" className="text-sm text-pink-100 hover:text-white transition-colors">
                                    289-698-4004
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-start space-x-3">
                            <a href="#" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-lg font-semibold mb-1">Quick Links</h4>
                        <div className="w-10 h-0.5 bg-white/40 rounded-full mb-4 mx-auto sm:mx-0" />
                        <ul className="space-y-1">
                            {[
                                { href: `/brands`, label: `Our Brands` },
                                { href: `/brands/braid-me`, label: `Braid Me` },
                                { href: `/brands/fun-and-accessories`, label: `LIATI Fun & Accessories` },
                                { href: `/my-story`, label: `My Story` },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center justify-center sm:justify-start gap-2 px-2 py-1.5 rounded-md text-sm text-pink-100 hover:text-white hover:bg-white/10 active:bg-black/10 transition-all duration-200"
                                    >
                                        <svg
                                            className="w-3 h-3 text-pink-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stay Updated / Newsletter */}
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-1">Stay Updated</h4>
                        <div className="w-10 h-0.5 bg-white/40 rounded-full mb-4 mx-auto sm:mx-0" />
                        <p className="text-sm text-pink-100 mb-4">
                            Subscribe for the latest fashion updates and exclusive offers.
                        </p>
                        <form onSubmit={handleSubscribe} noValidate className="space-y-3">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (status !== `idle`) {
                                            setStatus(`idle`);
                                            setMessage(``);
                                        }
                                    }}
                                    placeholder="Enter your email"
                                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm text-slate-900 bg-white/95 placeholder-slate-400 focus:outline-none focus:ring-2 transition-shadow ${
                                        status === `error` ? `ring-2 ring-yellow-300/60` : `focus:ring-white/60`
                                    }`}
                                />
                                <button
                                    type="submit"
                                    disabled={status === `loading`}
                                    className="px-5 py-2.5 bg-white text-pink-600 text-sm font-semibold rounded-lg hover:bg-pink-50 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 whitespace-nowrap"
                                >
                                    {status === `loading` ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Subscribing...
                                        </span>
                                    ) : `Subscribe`}
                                </button>
                            </div>
                            {message && (
                                <p className={`text-xs ${status === `success` ? `text-green-200` : `text-yellow-200`}`}>
                                    {message}
                                </p>
                            )}
                            <p className="text-xs text-pink-200/70">
                                We respect your privacy. Unsubscribe anytime.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-pink-400/30 pt-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0 text-xs text-pink-200">
                    <span>&copy; {new Date().getFullYear()} LIATI. All rights reserved. Made with &hearts;</span>
                    <span className="hidden sm:inline mx-2">&middot;</span>
                    <span>
                        Website by{` `}
                        <a
                            href="https://vincentwilkie.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-100 hover:text-white transition-colors underline decoration-pink-300/50 hover:decoration-white"
                        >
                            Vincent Wilkie
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
