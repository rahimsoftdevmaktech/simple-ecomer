import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white mt-20">

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h1 className="text-3xl font-extrabold mb-4">
                            Easy<span className="text-yellow-400">Shop.</span>
                        </h1>

                        <p className="text-gray-400 leading-7 text-sm max-w-xs">
                            Discover amazing products at the best prices.
                            Shop smarter and enjoy a better shopping experience
                            with Easy Shop.
                        </p>

                        <div className="flex gap-3 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition">f</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition">◎</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition">𝕏</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-5">Quick Links</h2>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
                            <li><Link to="/products" className="hover:text-yellow-400 transition">Products</Link></li>
                            <li><Link to="/dashbaord" className="hover:text-yellow-400 transition">Dashboard</Link></li>
                            <li><Link to="/loing" className="hover:text-yellow-400 transition">Login</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-lg font-bold mb-5">Our Services</h2>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition">Online Shopping</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Fast Delivery</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Secure Payment</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Customer Support</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-lg font-bold mb-5">Contact Us</h2>

                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>📍 Bangladesh</li>
                            <li>📧 support@easyshop.com</li>
                            <li>📞 +880 1234-567890</li>
                            <li>🕒 Sat - Thu: 9AM - 6PM</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} Easy Shop. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                    </div>

                </div>

            </div>

        </footer>
    )
}
