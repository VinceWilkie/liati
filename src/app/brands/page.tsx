'use client';
import React from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`${greatVibes.className} text-5xl md:text-7xl text-slate-900 dark:text-white`}>
            Our Brands
          </h1>
          {/* <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light max-w-3xl mx-auto">
            Discover our carefully curated collection of fashion brands, each offering unique pieces
            that help you express your personal style and personality.
          </p> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Brands Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Braid Me Brand */}
              <Link
                href="/brands/braid-me"
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src="/braid-me.png"
                      alt="Braid Me Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className={`${greatVibes.className} text-3xl text-slate-800 dark:text-white mb-3 group-hover:text-rose-600 transition-colors`}>
                    Braid Me
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Discover our collection of beautiful braided accessories and hair styling products.
                    Elevate your look with our carefully crafted pieces.
                  </p>
                  <div className="flex items-center text-rose-600 font-semibold group-hover:text-rose-700">
                    Explore
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Fun & Accessories Brand */}
              <Link
                href="/brands/fun-and-accessories"
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src="/liati-fun-and-accessories.png"
                      alt="Braid Me Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className={`${greatVibes.className} text-3xl text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors flex items-center gap-2`}>
                    <img src="/liati.png" alt="LIATI" className="h-8 inline-block" />
                    Fun & Accessories
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Add a touch of fun and personality to your style with our unique accessories.
                    From statement pieces to everyday essentials.
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    Explore
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
