'use client';
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const navItems = [
        { href: `/home`, label: `Home` },
        { href: `/my-story`, label: `My Story` },
        { href: `/brands`, label: `Our Brands` },
    ];

    const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

    useEffect(() => {
        if (isDrawerOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = `hidden`;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = ``;
            document.body.style.paddingRight = ``;
        }
        return () => {
            document.body.style.overflow = ``;
            document.body.style.paddingRight = ``;
        };
    }, [isDrawerOpen]);

    return (
        <>
            {/* Floating Hamburger Button */}
            <button
                onClick={() => setIsDrawerOpen(true)}
                className="fixed top-4 right-4 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-200"
                aria-label="Open menu"
            >
                <svg className="h-5 w-5 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
                    isDrawerOpen ? `opacity-100` : `opacity-0 pointer-events-none`
                }`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* Right-Side Drawer */}
            <nav
                className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isDrawerOpen ? `translate-x-0` : `translate-x-full`
                }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                    <Link href="/home" onClick={closeDrawer}>
                        <Image
                            src="/liati.png"
                            alt="LIATI"
                            width={77}
                            height={30}
                            priority
                        />
                    </Link>
                    <button
                        onClick={closeDrawer}
                        className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <svg className="h-5 w-5 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <div className="px-4 py-6 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                                pathname === item.href
                                    ? `text-pink-600 bg-pink-50 dark:bg-pink-950/40`
                                    : `text-slate-700 dark:text-slate-200 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/40`
                            }`}
                            onClick={closeDrawer}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle */}
                <div className="px-4 mt-2">
                        <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                            >
                                {theme === `light` ? (
                                    <svg className="w-5 h-5 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                                <span>{theme === `light` ? `Dark Mode` : `Light Mode`}</span>
                            </button>
                        </div>
                    </div>
            </nav>
        </>
    );
}
