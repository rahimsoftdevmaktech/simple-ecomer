import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

import {
    LayoutDashboard,
    ShoppingBag,
    Heart,
    UserRound,
    MapPin,
    Settings,
    LogOut,
    Headphones,
    Menu,
    X
} from 'lucide-react'

import { contextData } from '../lib/provider/ContextProvider'

export default function Usersidabar() {

    const location = useLocation()
    const navigate = useNavigate()

    const { setLogin } = useContext(contextData)

    const [sidebarOpen, setSidebarOpen] = useState(false)

    // Menu Items
    const menuItems = [
        {
            name: 'Overview',
            path: '/dashbaord',
            icon: LayoutDashboard,
            exact: true
        },
        {
            name: 'My Products',
            path: '/dashbaord/products',
            icon: ShoppingBag
        },
        {
            name: 'My Wishlist',
            path: '/dashbaord/wishlist',
            icon: Heart
        },
        {
            name: 'Addresses',
            path: '/dashbaord/addresses',
            icon: MapPin
        },
        {
            name: 'Profile Settings',
            path: '/dashbaord/settings',
            icon: Settings
        }
    ]

    // User Information
    let auth = null

    try {
        auth = JSON.parse(localStorage.getItem('auth') || 'null')
    } catch {
        auth = null
    }

    const email = auth?.email || 'No email available'

    const userName = email !== 'No email available'
        ? email.split('@')[0]
        : 'User'

    // Logout
    const handleLogout = () => {
        localStorage.removeItem('auth')
        setLogin(false)
        setSidebarOpen(false)

        navigate('/login', { replace: true })
    }

    // Active Route
    const isActive = (item) => {

        if (item.exact) {
            return location.pathname === item.path
        }

        return (
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + '/')
        )
    }

    // Close Sidebar
    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="lg:hidden mb-4">

                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition shadow-md"
                >
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}

                    {sidebarOpen ? 'Close Menu' : 'Open Dashboard Menu'}
                </button>

            </div>


            {/* Sidebar */}
            <aside
                className={`
                    w-full min-w-0
                    bg-white border border-slate-100
                    rounded-2xl shadow-sm

                    lg:sticky lg:top-0
                    lg:h-screen lg:max-h-screen
                    lg:overflow-y-auto lg:overscroll-contain
                    lg:rounded-none lg:border-y-0
                    lg:scrollbar-thin

                    transition-all duration-300

                    ${
                        sidebarOpen
                            ? 'block'
                            : 'hidden lg:block'
                    }
                `}
            >

                <div className="p-4 sm:p-5">

                    {/* Logo */}
                    <div className="mb-6 border-b border-slate-100 pb-5">

                        <Link
                            to="/"
                            onClick={closeSidebar}
                            className="flex items-center gap-2"
                        >

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                                <ShoppingBag size={22} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-800">
                                    Shop<span className="text-blue-600">Zone</span>
                                </h2>

                                <p className="text-xs text-slate-400">
                                    User Dashboard
                                </p>
                            </div>

                        </Link>

                    </div>


                    {/* User Profile */}
                    <div className="mb-6 flex min-w-0 items-center gap-3 rounded-xl bg-slate-50 p-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <UserRound size={23} />
                        </div>

                        <div className="min-w-0 flex-1">

                            <h3 className="truncate text-sm font-bold capitalize text-slate-800">
                                {userName}
                            </h3>

                            <p className="truncate text-xs text-slate-500">
                                {email}
                            </p>

                        </div>

                    </div>


                    {/* Navigation */}
                    <div>

                        <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            Menu
                        </p>

                        <nav className="flex flex-col gap-1.5">

                            {menuItems.map((item) => {

                                const Icon = item.icon
                                const active = isActive(item)

                                return (

                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeSidebar}
                                        className={`
                                            group flex w-full items-center
                                            gap-3 rounded-xl px-4 py-3
                                            text-sm font-medium
                                            transition-all duration-200

                                            ${
                                                active
                                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                                                    : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                                            }
                                        `}
                                    >

                                        <Icon
                                            size={19}
                                            className={`
                                                shrink-0
                                                ${
                                                    active
                                                        ? 'text-white'
                                                        : 'text-slate-400 group-hover:text-blue-600'
                                                }
                                            `}
                                        />

                                        <span className="flex-1">
                                            {item.name}
                                        </span>

                                        {active && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                        )}

                                    </Link>

                                )
                            })}

                        </nav>

                    </div>


                    {/* Support */}
                    <div className="mt-8 rounded-xl bg-blue-50 p-4">

                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <Headphones size={20} />
                        </div>

                        <h3 className="text-sm font-bold text-slate-800">
                            Need Help?
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            Contact our support team for any assistance.
                        </p>

                        <Link
                            to="/contact"
                            onClick={closeSidebar}
                            className="mt-3 inline-block text-xs font-bold text-blue-600 hover:underline"
                        >
                            Contact Support →
                        </Link>

                    </div>


                    {/* Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="mt-6 flex w-full items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100"
                    >
                        <LogOut size={19} />
                        Logout
                    </button>

                </div>

            </aside>

        </>
    )
}
