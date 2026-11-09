import React, { useContext, useState } from 'react'
import { contextData } from '../lib/provider/ContextProvider'
import { Link, NavLink, useNavigate } from 'react-router'
import { useModal } from '../hooks/useModal'

export default function Navbar() {

    const contextDatas = useContext(contextData)
    const { login, setLogin, myList = [] } = contextDatas

    const navigate = useNavigate()

    const [isOpen, closeModal, openModal] = useModal()
    const [menuOpen, setMenuOpen] = useState(false)

    // Logout Handler
    const handleLogout = () => {
        localStorage.removeItem('auth')

        setLogin(false)
        closeModal()
        setMenuOpen(false)

        navigate('/login', { replace: true })
    }

    // Close Mobile Menu
    const closeMenu = () => {
        setMenuOpen(false)
    }

    // Navigation Style
    const navStyle = ({ isActive }) =>
        `block px-4 py-2.5 rounded-lg transition-all duration-300 ${
            isActive
                ? 'bg-white text-blue-700'
                : 'text-white/90 hover:bg-white/15 hover:text-white'
        }`

    return (
        <>
            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

                    <div className="min-h-[75px] flex items-center justify-between gap-4">

                        {/* Logo */}
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white shrink-0"
                        >
                            Easy<span className="text-yellow-300">Shop.</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-2 font-semibold">

                                <li>
                                    <NavLink to="/" end className={navStyle}>
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

                        {/* Right Actions */}
                        <div className="flex items-center gap-2 sm:gap-3">

                            {/* My List */}
                            <Link
                                to="/dashbaord/products"
                                className="relative flex items-center gap-2 bg-white/15 border border-white/20 px-3 sm:px-4 py-2.5 rounded-xl text-white hover:bg-white/25 transition"
                            >
                                <span className="text-xl">♡</span>

                                <span className="hidden sm:inline font-semibold">
                                    My List
                                </span>

                                <span className="bg-yellow-400 text-gray-900 min-w-6 h-6 px-1 rounded-full flex items-center justify-center text-xs font-bold">
                                    {myList.length}
                                </span>
                            </Link>

                            {/* Login / Logout */}
                            {login ? (
                                <button
                                    onClick={openModal}
                                    className="hidden sm:block bg-red-500 hover:bg-red-600 px-4 sm:px-5 py-2.5 rounded-xl text-white font-bold transition active:scale-95"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="hidden sm:block bg-yellow-400 hover:bg-yellow-300 px-5 py-2.5 rounded-xl text-gray-900 font-bold transition"
                                >
                                    Login
                                </Link>
                            )}

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/15 text-white text-2xl hover:bg-white/25 transition"
                                aria-label="Toggle navigation menu"
                                aria-expanded={menuOpen}
                            >
                                {menuOpen ? '✕' : '☰'}
                            </button>

                        </div>

                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ${
                            menuOpen
                                ? 'max-h-96 opacity-100 pb-5'
                                : 'max-h-0 opacity-0'
                        }`}
                    >

                        <nav>
                            <ul className="flex flex-col gap-2 font-semibold">

                                <li>
                                    <NavLink
                                        to="/"
                                        end
                                        onClick={closeMenu}
                                        className={navStyle}
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/products"
                                        onClick={closeMenu}
                                        className={navStyle}
                                    >
                                        Products
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashbaord"
                                        onClick={closeMenu}
                                        className={navStyle}
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>

                                {/* Mobile Login / Logout */}
                                <li className="pt-2">

                                    {login ? (
                                        <button
                                            onClick={() => {
                                                closeMenu()
                                                openModal()
                                            }}
                                            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold transition"
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            to="/login"
                                            onClick={closeMenu}
                                            className="block text-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-3 rounded-xl font-bold transition"
                                        >
                                            Login
                                        </Link>
                                    )}

                                </li>

                            </ul>
                        </nav>

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
                        className="relative w-full max-w-md bg-white rounded-2xl p-5 sm:p-7 shadow-2xl animate-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute right-5 top-4 text-2xl text-gray-400 hover:text-red-500 transition"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        {/* Icon */}
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                            🚪
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
                            Confirm Logout
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 text-center mt-3 leading-6 text-sm sm:text-base">
                            Are you sure you want to logout from your account?
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">

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
