import React from 'react'
import { Link } from 'react-router'

export default function Banner() {
    return (
        <section className="relative bg-gradient-to-r from-[#CD031B] to-[#CD031B] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

                <div className="min-h-[500px] lg:min-h-[600px] flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">

                    {/* Content */}
                    <div className="flex-1 w-full text-center md:text-left text-white z-10">

                        <span className="inline-block bg-white/15 border border-white/20 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider mb-5 sm:mb-6">
                            ✨ NEW COLLECTION 2026
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                            Easy Shop

                            <span className="block text-yellow-300">
                                Shop Your Style
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base lg:text-lg text-white/80 my-5 sm:my-7 max-w-xl mx-auto md:mx-0 leading-7 sm:leading-8">
                            Discover amazing products at incredible prices.
                            Upgrade your lifestyle with our latest collection
                            and enjoy a better shopping experience.
                        </p>

                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            Join With Us →
                        </Link>

                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full flex justify-center items-center relative">

                        {/* Background Circle */}
                        <div className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] bg-white/10 rounded-full blur-2xl">
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
                            alt="Featured Red Sneaker"
                            className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[550px]   hover:scale-105 transition-transform duration-700"
                        />

                    </div>

                </div>

            </div>

        </section>
    )
}
