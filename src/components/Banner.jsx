
import React from 'react'

export default function Banner() {
    return (
        <div className="relative bg-gradient-to-r from-[#CD051C] to-[#CD051C] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 min-h-[550px] flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12">

                {/* Content */}
                <div className="flex-1 text-center md:text-left text-white">

                    <span className="inline-block bg-white/15 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wider mb-6">
                        ✨ NEW COLLECTION 2026
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Easy Shop
                        <span className="block text-yellow-300">
                            Shop Your Style
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-white/80 my-7 max-w-xl leading-8">
                        Discover amazing products at incredible prices.
                        Upgrade your lifestyle with our latest collection
                        and enjoy a better shopping experience.
                    </p>

                    <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 transition-all duration-300">
                        Join With Us →
                    </button>

                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center items-center relative">

                    <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-white/10 rounded-full blur-2xl"></div>

                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
                        alt="Featured Red Sneaker"
                        className="relative w-full max-w-[550px] object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700"
                    />

                </div>

            </div>
        </div>
    )
}
