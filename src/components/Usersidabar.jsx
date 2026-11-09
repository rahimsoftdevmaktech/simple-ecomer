import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

import {
    LayoutDashboard,
    ShoppingBag,
    Heart,
    UserRound,
    MapPin,
    Settings,
    LogOut,
    Headphones
} from 'lucide-react'

import { contextData } from '../lib/provider/ContextProvider'

export default function Usersidabar() {

    const location = useLocation()
    const navigate = useNavigate()

    const { setLogin } = useContext(contextData)

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

    // Get user information
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
        navigate('/login', { replace: true })
    }

    // Active route
    const isActive = (item) => {

        if (item.exact) {
            return location.pathname === item.path
        }

        return (
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + '/')
        )
    }

    return (
        <aside className="w-full min-w-0 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-sm lg:sticky lg:top-5 lg:self-start">

            {/* Logo */}
            <div className="mb-5 sm:mb-6 border-b border-slate-100 pb-5">

                <Link to="/" className="flex items-center gap-2">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
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
            <div className="mb-5 flex min-w-0 items-center gap-3 rounded-xl bg-slate-50 p-3">

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

                <nav className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">

                    {menuItems.map((item) => {

                        const Icon = item.icon
                        const active = isActive(item)

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    group flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200
                                    lg:w-full lg:px-4
                                    ${
                                        active
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                                    }
                                `}
                            >

                                <Icon
                                    size={19}
                                    className={`shrink-0 ${
                                        active
                                            ? 'text-white'
                                            : 'text-slate-400 group-hover:text-blue-600'
                                    }`}
                                />

                                <span className="whitespace-nowrap">
                                    {item.name}
                                </span>

                                {active && (
                                    <span className="ml-auto hidden h-1.5 w-1.5 shrink-0 rounded-full bg-white lg:block" />
                                )}

                            </Link>
                        )
                    })}

                </nav>

            </div>


            {/* Support */}
            <div className="mt-5 hidden rounded-xl bg-blue-50 p-4 sm:block lg:mt-8">

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
                    className="mt-3 inline-block text-xs font-bold text-blue-600 hover:underline"
                >
                    Contact Support →
                </Link>

            </div>


            {/* Logout */}
            <button
                type="button"
                onClick={handleLogout}
                className="mt-4 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100 lg:mt-6 lg:justify-start"
            >
                <LogOut size={19} />
                Logout
            </button>

        </aside>
    )
}
