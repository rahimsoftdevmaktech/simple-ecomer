import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6 py-10">

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full flex justify-center">

                <div className="text-center max-w-xl">

                    {/* 404 */}
                    <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                        404
                    </h1>

                    {/* Icon */}
                    <div className="text-6xl my-5">
                        🔍
                    </div>

                    {/* Content */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        Oops! Page Not Found
                    </h2>

                    <p className="text-gray-500 mt-5 leading-7 text-base md:text-lg">
                        The page you are looking for might have been removed,
                        had its name changed, or is temporarily unavailable.
                    </p>

                    {/* Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                        ← Back To Home
                    </Link>

                    <p className="text-sm text-gray-400 mt-10">
                        EasyShop © {new Date().getFullYear()}
                    </p>

                </div>

            </div>

        </div>
    )
}
