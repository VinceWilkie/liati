'use client';
import React from "react";

export default function FunAndAccessoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Brand Logo */}
        <div className="mb-12">
          <div
            className="w-48 h-48 mx-auto mb-8 bg-white rounded-full shadow-lg"
            style={{
              backgroundImage: 'url(/liati-fun-and-accessories.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        {/* Coming Soon Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent mb-4" style={{ lineHeight: '1.1' }}>
            Coming Soon
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
            LIATI Fun & Accessories
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Get ready for a world of fun and fabulous accessories! Our collection of unique
            and playful pieces will be launching soon to add personality to your style.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Creative Designs</h3>
              <p className="text-slate-600">Unique and artistic accessory designs</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌈</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Playful Style</h3>
              <p className="text-slate-600">Fun pieces that express your personality</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Quality Crafted</h3>
              <p className="text-slate-600">High-quality materials and attention to detail</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/brands"
              className="px-8 py-4 border-2 border-purple-500 text-purple-600 font-semibold rounded-full hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Back to Brands
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
