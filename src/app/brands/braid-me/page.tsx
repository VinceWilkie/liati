'use client';
import React from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

export default function BraidMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Brand Logo */}
        <div className="mb-12">
          <div
            className="w-48 h-48 mx-auto mb-8 bg-white dark:bg-slate-700 rounded-full shadow-lg"
            style={{
              backgroundImage: 'url(/braid-me.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        {/* Coming Soon Content */}
        <div className="space-y-8">
          <h1 className={`${greatVibes.className} text-5xl md:text-7xl bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-4`} style={{ lineHeight: '1.4' }}>
            Coming Soon
          </h1>

          <h2 className={`${greatVibes.className} text-4xl md:text-5xl text-slate-800 dark:text-white mb-6`}>
            Braid Me
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We&apos;re crafting something beautiful for you. Our collection of braided accessories
            and hair styling products will be launching soon!
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className={`${greatVibes.className} text-2xl text-slate-800 dark:text-white mb-2`}>Handcrafted</h3>
              <p className="text-slate-600 dark:text-slate-300">Beautifully crafted braided accessories</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className={`${greatVibes.className} text-2xl text-slate-800 dark:text-white mb-2`}>Unique Styles</h3>
              <p className="text-slate-600 dark:text-slate-300">One-of-a-kind designs for every occasion</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💖</span>
              </div>
              <h3 className={`${greatVibes.className} text-2xl text-slate-800 dark:text-white mb-2`}>Made with Love</h3>
              <p className="text-slate-600 dark:text-slate-300">Crafted with passion and attention to detail</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/brands"
              className="px-8 py-4 border-2 border-pink-500 text-pink-600 dark:text-pink-400 dark:border-pink-400 font-semibold rounded-full hover:bg-pink-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Back to Brands
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
