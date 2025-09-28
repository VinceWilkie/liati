'use client';
import React from "react";
import Link from "next/link";

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Our Brands
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl mx-auto">
            Discover our carefully curated collection of fashion brands, each offering unique pieces 
            that help you express your personal style and personality.
          </p>
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
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">BM</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Braid Me</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">
                    Braid Me
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Discover our collection of beautiful braided accessories and hair styling products. 
                    Elevate your look with our carefully crafted pieces.
                  </p>
                  <div className="flex items-center text-rose-600 font-semibold group-hover:text-rose-700">
                    Explore Collection
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Fun & Accessories Brand */}
              <Link 
                href="/brands/fun-and-accessories" 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">F&A</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Liati Fun & Accessories</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    Liati Fun & Accessories
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Add a touch of fun and personality to your style with our unique accessories. 
                    From statement pieces to everyday essentials.
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    Shop Now
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
