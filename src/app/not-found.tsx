'use client';
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Heart Background */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] opacity-20 blur-xl">
            <svg className="w-full h-full text-rose-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          {/* 404 Text */}
          <div className="relative z-10">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Oops! It looks like this page got lost in the fashion world.
              Don&apos;t worry, even the best outfits sometimes need a little adjustment.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
          <Link
            href="/brands"
            className="px-8 py-4 border-2 border-pink-500 text-pink-600 font-semibold rounded-full hover:bg-pink-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Explore Brands
          </Link>
        </div>

        {/* Fun Message */}
        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200">
          <p className="text-slate-600 italic">
            &ldquo;Love is all there is&rdquo; - even when you can&apos;t find what you&apos;re looking for! 💕
          </p>
        </div>
      </div>
    </div>
  );
}
