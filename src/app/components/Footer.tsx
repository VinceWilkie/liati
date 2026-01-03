'use client';
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact & Social Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-5 h-5 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:liati.business@gmail.com" className="text-pink-100 hover:text-white transition-colors">
                  liati.business@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-5 h-5 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:289-698-4004" className="text-pink-100 hover:text-white transition-colors">
                  289-698-4004
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/brands" className="text-pink-100 hover:text-white transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/brands/braid-me" className="text-pink-100 hover:text-white transition-colors">
                  Braid Me
                </Link>
              </li>
              <li>
                <Link href="/brands/fun-and-accessories" className="text-pink-100 hover:text-white transition-colors">
                  LIATI Fun & Accessories
                </Link>
              </li>
              <li>
                <Link href="/my-story" className="text-pink-100 hover:text-white transition-colors">
                  My Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-pink-100 mb-4">
              Subscribe to our newsletter for the latest fashion updates and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="text-pink-100 absolute z-10">Coming Soon!</span>
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-2 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors">
                Subscribe
              </button> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-pink-100 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LIATI. All rights reserved. Made with ❤️
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                Shipping Info
              </a>
            </div> */}
          </div>

          {/* Developer Credit */}
          <div className="mt-6 pt-6 border-t border-pink-400/20">
            <p className="text-center text-pink-200 text-xs">
              Website created by{' '}
              <a
                href="https://vincentwilkie.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-100 hover:text-white transition-colors underline decoration-pink-300 hover:decoration-white"
              >
                Vincent Wilkie
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
