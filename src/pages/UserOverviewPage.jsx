import React, { useContext } from 'react'
import { Link } from 'react-router'
import {
    ShoppingBag,
    Heart,
    Package,
    ArrowUpRight,
    ChevronRight,
    User,
    Mail,
    CheckCircle2,
    ShoppingCart
} from 'lucide-react'

import { contextData } from '../lib/provider/ContextProvider'

export default function UserOverviewPage() {

    const {
        login,
        products,
        myList,
        myWishList
    } = useContext(contextData)

    // Get logged-in user information
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

    // Dashboard statistics
    const stats = [
        {
            title: 'Total Products',
            value: products?.length || 0,
            icon: Package,
            color: 'bg-blue-100 text-blue-600',
            description: 'Available in shop'
        },
        {
            title: 'My Products',
            value: myList?.length || 0,
            icon: ShoppingBag,
            color: 'bg-green-100 text-green-600',
            description: 'Products added by you'
        },
        {
            title: 'Wishlist Items',
            value: myWishList?.length || 0,
            icon: Heart,
            color: 'bg-pink-100 text-pink-600',
            description: 'Your favorite products'
        },
        {
            title: 'Account Status',
            value: login ? 'Active' : 'Inactive',
            icon: User,
            color: 'bg-purple-100 text-purple-600',
            description: 'Your account status'
        }
    ]

    // Get latest products from My Products
    const recentProducts = [...(myList || [])].slice(-4).reverse()

    // Dynamic date
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="min-h-screen w-full bg-slate-50 p-4 sm:p-6 lg:p-8">

            <div className="w-full space-y-7">

                {/* Welcome Section */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            {today}
                        </p>

                        <h1 className="mt-1 text-2xl font-bold text-slate-800 sm:text-3xl">
                            Welcome back, {userName}! 👋
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Here's what's happening with your account today.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        Continue Shopping
                        <ArrowUpRight className="ml-2" size={17} />
                    </Link>

                </div>


                {/* Statistics Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item) => {

                        const Icon = item.icon

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                            >

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            {item.title}
                                        </p>

                                        <h2 className="mt-3 text-2xl font-bold capitalize text-slate-800">
                                            {item.value}
                                        </h2>
                                    </div>

                                    <div className={`rounded-xl p-3 ${item.color}`}>
                                        <Icon size={24} />
                                    </div>

                                </div>

                                <p className="mt-4 text-xs text-slate-500">
                                    {item.description}
                                </p>

                            </div>
                        )
                    })}

                </div>


                {/* Products and Wishlist */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                    {/* My Products */}
                    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm xl:col-span-2">

                        <div className="mb-6 flex items-center justify-between">

                            <div>
                                <h2 className="text-lg font-bold text-slate-800">
                                    My Products
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Products you have added to your list
                                </p>
                            </div>

                            <Link
                                to="/dashbaord/products"
                                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                            >
                                View All
                                <ChevronRight className="inline" size={16} />
                            </Link>

                        </div>


                        {recentProducts.length > 0 ? (

                            <div className="space-y-4">

                                {recentProducts.map((product) => (

                                    <div
                                        key={product.id}
                                        className="flex items-center gap-4 rounded-xl border border-slate-100 p-3 transition hover:bg-slate-50"
                                    >

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-16 w-16 rounded-xl bg-slate-100 object-cover"
                                        />

                                        <div className="min-w-0 flex-1">

                                            <h3 className="truncate font-semibold text-slate-700">
                                                {product.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                {product.category}
                                            </p>

                                            <p className="mt-1 font-bold text-green-600">
                                                ৳{product.price}
                                            </p>

                                        </div>

                                        <ShoppingBag
                                            size={20}
                                            className="shrink-0 text-green-600"
                                        />

                                    </div>

                                ))}

                            </div>

                        ) : (

                            <div className="flex flex-col items-center justify-center py-12 text-center">

                                <ShoppingBag
                                    size={45}
                                    className="text-slate-300"
                                />

                                <h3 className="mt-4 font-semibold text-slate-700">
                                    No Products Added
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    You haven't added any products yet.
                                </p>

                                <Link
                                    to="/"
                                    className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                                >
                                    Explore Products
                                </Link>

                            </div>

                        )}

                    </div>


                    {/* Wishlist */}
                    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <h2 className="text-lg font-bold text-slate-800">
                                    My Wishlist
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Your favorite products
                                </p>
                            </div>

                            <Heart
                                size={22}
                                className="text-pink-500"
                            />

                        </div>


                        {myWishList?.length > 0 ? (

                            <div className="mt-6 space-y-4">

                                {myWishList.slice(0, 4).map((product) => (

                                    <div
                                        key={product.id}
                                        className="flex items-center gap-3"
                                    >

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-12 w-12 rounded-lg bg-slate-100 object-cover"
                                        />

                                        <div className="min-w-0 flex-1">

                                            <h3 className="truncate text-sm font-semibold text-slate-700">
                                                {product.name}
                                            </h3>

                                            <p className="mt-1 text-sm font-bold text-green-600">
                                                ৳{product.price}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                                <Link
                                    to="/dashbaord/wishlist"
                                    className="block border-t border-slate-100 pt-4 text-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    View Wishlist
                                    <ChevronRight className="inline" size={16} />
                                </Link>

                            </div>

                        ) : (

                            <div className="flex flex-col items-center justify-center py-12 text-center">

                                <Heart
                                    size={40}
                                    className="text-slate-300"
                                />

                                <h3 className="mt-4 font-semibold text-slate-700">
                                    Wishlist is Empty
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Add your favorite products here.
                                </p>

                            </div>

                        )}

                    </div>

                </div>


                {/* Profile Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Profile Card */}
                    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <h2 className="font-bold text-slate-800">
                                My Profile
                            </h2>

                            <Link
                                to="/dashbaord/settings"
                                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                            >
                                Edit Profile
                            </Link>

                        </div>


                        <div className="mt-5 flex items-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <User size={32} />
                            </div>

                            <div className="min-w-0">

                                <h3 className="font-bold capitalize text-slate-800">
                                    {userName}
                                </h3>

                                <p className="mt-1 truncate text-sm text-slate-500">
                                    {email}
                                </p>

                                <span className={`mt-2 inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                                    login
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                }`}>
                                    {login ? 'Active Account' : 'Inactive Account'}
                                </span>

                            </div>

                        </div>


                        <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500">

                            <p>
                                <Mail size={16} className="mr-2 inline" />
                                {email}
                            </p>

                            <p>
                                <CheckCircle2
                                    size={16}
                                    className="mr-2 inline text-green-600"
                                />
                                Login status: {login ? 'Logged In' : 'Logged Out'}
                            </p>

                        </div>

                    </div>


                    {/* Shopping Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-sm">

                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                        <div className="relative">

                            <div className="flex items-center gap-2">

                                <ShoppingCart
                                    size={22}
                                    className="text-yellow-300"
                                />

                                <span className="text-sm font-semibold text-blue-100">
                                    Start Shopping
                                </span>

                            </div>

                            <h2 className="mt-5 text-2xl font-bold">
                                Discover More Products
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-blue-100">
                                Explore our collection and add your favorite products to your list and wishlist.
                            </p>

                            <Link
                                to="/"
                                className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                            >
                                Explore Products
                                <ArrowUpRight className="ml-2" size={17} />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
