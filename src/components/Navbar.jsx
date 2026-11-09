import React, { useContext } from 'react'
import { contextData } from '../lib/provider/ContextProvider'
import { Link, NavLink } from 'react-router'
import { useModal } from '../hooks/useModal'

export default function Navbar() {

    const contextDatas = useContext(contextData)
    const { login, setLogin, myList } = contextDatas

    const [isOpen, closeModal, openModal] = useModal()
    const handleLogout = () => {
        // Remove auth data from localStorage
        localStorage.removeItem('auth')

        // Update Context state
        setLogin(false)
        closeModal()

        // Navigate to login page
        navigate('/login', { replace: true })
    }

    const navStyle = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
            ? 'bg-white text-blue-600'
            : 'text-white/90 hover:bg-white/15 hover:text-white'
        }`

    return (
        <>
            <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg">

                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
                        Easy<span className="text-yellow-300">Shop.</span>
                    </Link>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex items-center gap-2 font-semibold text-sm md:text-base">

                            <li>
                                <NavLink to="/" className={navStyle}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/products" className={navStyle}>
                                    Products
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashbaord" className={navStyle}>
                                    Dashboard
                                </NavLink>
                            </li>

                        </ul>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">

                        {/* My List */}
                        <div className="relative flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-xl text-white">
                            <span className="text-lg">♡</span>
                            <span className="font-semibold">My List</span>

                            <span className="bg-yellow-400 text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                {myList.length}
                            </span>
                        </div>

                        {/* Login / Logout */}
                        {login ? (
                            <button
                                onClick={openModal}
                                className="bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg active:scale-95"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-yellow-400 hover:bg-yellow-300 px-6 py-2.5 rounded-xl text-gray-900 font-bold transition-all duration-300 hover:shadow-lg"
                            >
                                Login
                            </Link>
                        )}

                    </div>
                </div>
            </header>

            {/* Logout Confirmation Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >

                    <div
                        className="relative w-full max-w-md bg-white rounded-2xl p-7 shadow-2xl animate-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute right-5 top-4 text-2xl text-gray-400 hover:text-red-500 transition"
                        >
                            &times;
                        </button>

                        {/* Icon */}
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                            🚪
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Confirm Logout
                        </h2>

                        <p className="text-gray-500 text-center mt-3 leading-6">
                            Are you sure you want to logout from your account?
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-3">

                            <button
                                onClick={closeModal}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleLogout}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                            >
                                Yes, Logout
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
