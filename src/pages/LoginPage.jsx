import React, { useContext, useState } from 'react'
import { contextData } from '../lib/provider/ContextProvider'
import { useNavigate, Link } from 'react-router'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { setLogin } = useContext(contextData)
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        setError('')

        // Check empty fields
        if (!email.trim() || !password.trim()) {
            setError('Please enter your email and password.')
            return
        }

        // Demo credentials
        const validEmail = 'rahim123@gmail.com'
        const validPassword = 'rahim123'

        // Check credentials
        if (
            email.trim().toLowerCase() !== validEmail ||
            password !== validPassword
        ) {
            setError('Email or password does not match. Please try again.')
            return
        }

        // Auth information
        const authData = {
            isAuthenticated: true,
            email: validEmail,
            loggedInAt: new Date().toISOString()
        }

        // Save auth data in localStorage
        localStorage.setItem('auth', JSON.stringify(authData))

        // Update React state
        setLogin(true)

        // Navigate to dashboard
        navigate('/dashbaord')
    }

    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-5 py-16">

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex justify-center">

                <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center py-10 px-6">

                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                            👤
                        </div>

                        <h1 className="text-3xl font-extrabold">
                            Welcome Back!
                        </h1>

                        <p className="text-white/80 mt-2">
                            Login to continue shopping with Easy Shop.
                        </p>

                    </div>

                    {/* Form */}
                    <div className="p-7 md:p-9">

                        <form onSubmit={handleLoginSubmit} className="flex flex-col">

                            {/* Email */}
                            <label className="font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition mb-5"
                                required
                            />

                            {/* Password */}
                            <label className="font-semibold text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                                required
                            />

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mt-4 text-sm font-medium">
                                    {error}
                                </div>
                            )}

                            {/* Info */}
                            <div className="flex justify-between items-center mt-4 text-sm">

                                <span className="text-gray-500">
                                    Secure Login
                                </span>

                                <span className="text-green-600 font-semibold">
                                    Easy Shop Account
                                </span>

                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl mt-7 shadow-lg shadow-green-200 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                            >
                                Login to Account →
                            </button>

                        </form>

                        {/* Footer */}
                        <div className="text-center mt-7 text-sm text-gray-500">

                            Don't have an account?

                            <Link
                                to="/"
                                className="text-green-600 font-bold ml-1 hover:underline"
                            >
                                Explore Products
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
