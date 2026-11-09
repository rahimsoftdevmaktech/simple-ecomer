import React, { useContext } from 'react'
import { contextData } from '../lib/provider/ContextProvider'
import {
    Heart,
    Trash2,
    ShoppingBag,
    ArrowRight,
    PackageOpen
} from 'lucide-react'
import { Link } from 'react-router'

export default function MyWishList() {

    const { myWishList, setWishList, myList, setMyList } =
        useContext(contextData)

    // Remove from Wishlist
    const handleRemove = (id) => {
        setWishList((prev) =>
            prev.filter((product) => product.id !== id)
        )
    }

    // Add to My List
    const handleAddToList = (product) => {

        const alreadyAdded = myList.some(
            (pro) => pro.id === product.id
        )

        if (alreadyAdded) {
            alert("Already added to My List!")
            return
        }

        setMyList((prev) => [...prev, product])

        alert("Product added to My List!")
    }

    return (
        <div className="w-full min-h-screen bg-slate-50 p-4 md:p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Heart
                            size={25}
                            className="text-red-500"
                            fill="currentColor"
                        />

                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                            My Wishlist
                        </h1>
                    </div>

                    <p className="text-sm text-slate-500">
                        Your favorite products are waiting for you.
                    </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm">
                    <p className="text-xs text-slate-400 font-semibold">
                        TOTAL WISHLIST
                    </p>

                    <p className="text-2xl font-bold text-red-500">
                        {myWishList.length}
                        <span className="text-sm text-slate-400 ml-2">
                            Products
                        </span>
                    </p>
                </div>

            </div>

            {/* Empty Wishlist */}
            {myWishList.length === 0 ? (

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center p-6">

                    <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-5">
                        <PackageOpen
                            size={45}
                            className="text-red-400"
                        />
                    </div>

                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                        Your Wishlist is Empty!
                    </h2>

                    <p className="text-sm text-slate-500 max-w-sm leading-6 mb-6">
                        You haven't added any products to your wishlist yet.
                        Explore our products and save your favorites.
                    </p>

                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                    >
                        <ShoppingBag size={19} />
                        Explore Products
                        <ArrowRight size={18} />
                    </Link>

                </div>

            ) : (

                /* Wishlist Products */
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                    {myWishList.map((product) => {

                        const isAdded = myList.some(
                            (pro) => pro.id === product.id
                        )

                        return (
                            <div
                                key={product.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >

                                {/* Product Image */}
                                <div className="relative h-56 overflow-hidden bg-slate-100">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1">
                                        <Heart
                                            size={13}
                                            fill="currentColor"
                                        />
                                        WISHLIST
                                    </span>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemove(product.id)}
                                        title="Remove from wishlist"
                                        className="absolute top-4 right-4 w-10 h-10 bg-white text-red-500 rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </div>

                                {/* Product Details */}
                                <div className="p-5">

                                    <div className="flex items-center justify-between gap-3 mb-2">

                                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            {product.category}
                                        </span>

                                        {product.rating && (
                                            <span className="text-sm text-amber-500 font-semibold">
                                                ★ {product.rating}
                                            </span>
                                        )}

                                    </div>

                                    <h2 className="text-lg font-bold text-slate-800 mb-2">
                                        {product.name}
                                    </h2>

                                    <p className="text-sm text-slate-500 leading-6 line-clamp-2 min-h-12">
                                        {product.description}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-center gap-3 mt-4">

                                        <span className="text-xl font-bold text-slate-800">
                                            ৳{product.price}
                                        </span>

                                        {product.originalPrice && (
                                            <span className="text-sm text-slate-400 line-through">
                                                ৳{product.originalPrice}
                                            </span>
                                        )}

                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 mt-5 pt-4 border-t border-slate-100">

                                        <button
                                            onClick={() => handleAddToList(product)}
                                            disabled={isAdded}
                                            className={`flex-1 h-11 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition ${
                                                isAdded
                                                    ? "bg-green-100 text-green-700 cursor-not-allowed"
                                                    : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                                            }`}
                                        >
                                            {isAdded ? (
                                                <>
                                                    <ShoppingBag size={17} />
                                                    Added
                                                </>
                                            ) : (
                                                <>
                                                    <ShoppingBag size={17} />
                                                    Add to My List
                                                </>
                                            )}
                                        </button>

                                        <button
                                            onClick={() => handleRemove(product.id)}
                                            className="w-11 h-11 shrink-0 rounded-xl border border-red-200 text-red-500 flex items-center justify-center hover:bg-red-50 transition"
                                            title="Remove"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>
            )}

        </div>
    )
}