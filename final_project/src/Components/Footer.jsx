import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [currency, setCurrency] = useState('USD')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Feature Highlights Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-16 border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Free & Fast Delivery */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Free & Fast Delivery</h3>
              <p className="text-gray-300 text-base leading-relaxed">No extra costs, just the price you see.</p>
            </div>

            {/* 14-Day Returns */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">14-Day Returns</h3>
              <p className="text-gray-300 text-base leading-relaxed">Risk-free shopping with easy returns.</p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-300 text-base leading-relaxed">24/7 support, always here just for you.</p>
            </div>

            {/* Member Discounts */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Member Discounts</h3>
              <p className="text-gray-300 text-base leading-relaxed">Special prices for our loyal customers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Information Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-600 pb-4">Information</h3>
              <ul className="space-y-4 mb-8">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  About Us
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Our Stories
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Size Guide
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Contact us
                </a></li>
              </ul>
              <div className="space-y-3 bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+61 (9) 567 8765 43</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">hello@yourname.com</span>
                </div>
              </div>
            </div>

            {/* Customer Services Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-600 pb-4">Customer Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Shipping
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Return & Refund
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Privacy Policy
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center group">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Terms & Conditions
                </a></li>
              </ul>
            </div>

            {/* Newsletter & Social Media Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-600 pb-4">Stay In The Loop With Weekly Newsletters</h3>
              <form onSubmit={handleSubscribe} className="mb-8">
                <div className="flex shadow-lg rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 flex items-center font-semibold"
                  >
                    Subscribe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                  <span className="text-white font-bold text-lg">f</span>
                </a>
                <a href="#" className="bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gradient-to-br from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-gray-950 to-gray-900 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-base">
              Copyright ©2025 GearO. All Rights Reserved.
            </div>

            {/* Currency Selector */}
            <div className="flex items-center space-x-3 bg-gray-800 px-4 py-2 rounded-lg">
              <div className="w-6 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">US</span>
              </div>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-white px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
              </select>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-3">
                <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div className="w-10 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
                <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">AMEX</span>
                </div>
                <div className="w-10 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">PP</span>
                </div>
                <div className="w-10 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">DISC</span>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Scroll to top"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 