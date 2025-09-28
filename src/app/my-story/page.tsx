'use client';
import React from "react";

export default function MyStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            My Story
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl mx-auto">
            The journey behind LIATI and the passion that drives our fashion philosophy.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Story Content */}
          <section className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                  The Beginning
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  My journey into fashion began with a simple belief: that what we wear is more than just fabric and thread—it's a form of self-expression, a way to tell our story to the world. This philosophy became the foundation of LIATI, where "Love is all there is" isn't just a tagline, but a way of life.
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 mt-8">
                  The Vision
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  I envisioned creating a space where fashion meets purpose, where every piece tells a story of love, creativity, and authenticity. LIATI became that space—a collection of carefully curated brands that celebrate individuality and help people express their unique style and personality.
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 mt-8">
                  Our Brands
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Each brand under the LIATI umbrella represents a different facet of personal expression. From the intricate beauty of Braid Me to the playful creativity of LIATI Fun & Accessories, every piece is chosen with intention and love.
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 mt-8">
                  The Future
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  As we continue to grow, our mission remains the same: to create beautiful, meaningful fashion that empowers people to express their authentic selves. Because when you feel good in what you wear, you can share that love with the world.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Love</h3>
                <p className="text-slate-600">Every piece is created and chosen with love, reflecting our belief that love is all there is.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Authenticity</h3>
                <p className="text-slate-600">We celebrate individuality and encourage people to express their true selves through fashion.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Sustainability</h3>
                <p className="text-slate-600">We're committed to responsible fashion that cares for people and the planet.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
