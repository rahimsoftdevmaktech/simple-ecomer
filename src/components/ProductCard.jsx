import React from 'react'
import { Heart, Plus, Check, ShoppingBag, Trash2 } from 'lucide-react'

export default function ProductCard({
    product,
    setMyList,
    login,
    myList,
    myWishList,
    setWishList
}) {

    // Check My List
    const isAdded = myList.some(
        (pro) => pro.id === product.id
    )

    // Check Wishlist
    const isWishlisted = myWishList.some(
        (pro) => pro.id === product.id
    )

    // Add to My List
    const handleAdd = () => {
        if (!login) {
            alert("Login first")
            return
        }

        if (isAdded) {
            return
        }

        setMyList((prev) => [...prev, product])
    }

    // Add / Remove Wishlist
    const handleWishlist = () => {
        if (!login) {
            alert("Login first")
            return
        }

        if (isWishlisted) {
            setWishList((prev) =>
                prev.filter((pro) => pro.id !== product.id)
            )
        } else {
            setWishList((prev) => [...prev, product])
        }
    }

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">

            {/* Product Image */}
            <div className="relative h-[280px] overflow-hidden bg-gray-100">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Featured Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold px-3 py-2 rounded-full shadow">
                    FEATURED
                </span>

                {/* Wishlist Button */}
                <button
                    onClick={handleWishlist}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                        isWishlisted
                            ? "bg-red-500 text-white"
                            : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white"
                    }`}
                >
                    <Heart
                        size={21}
                        fill={isWishlisted ? "currentColor" : "none"}
                    />
                </button>

                {/* Wishlist Badge */}
                {isWishlisted && (
                    <span className="absolute bottom-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow">
                        ♥ WISHLISTED
                    </span>
                )}

            </div>

            {/* Product Details */}
            <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                </h2>

                <p className="text-sm text-gray-500 leading-6 line-clamp-3 min-h-[72px]">
                    {product.description}
                </p>

                <div className="border-t border-gray-100 mt-5 pt-4 flex flex-col gap-3">

                    {/* Add to My List */}
                    <button
                        onClick={handleAdd}
                        disabled={isAdded}
                        className={`w-full h-12 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                            isAdded
                                ? "bg-green-100 text-green-700 cursor-not-allowed"
                                : "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-200 active:scale-95"
                        }`}
                    >
                        {isAdded ? (
                            <>
                                <Check size={19} />
                                Added to My List
                            </>
                        ) : (
                            <>
                                <Plus size={19} />
                                Add to My List
                            </>
                        )}
                    </button>

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlist}
                        className={`w-full h-11 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all duration-300 active:scale-95 ${
                            isWishlisted
                                ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                                : "bg-white border-gray-200 text-gray-600 hover:border-red-400 hover:text-red-500"
                        }`}
                    >
                        {isWishlisted ? (
                            <>
                                <Trash2 size={18} />
                                Remove from Wishlist
                            </>
                        ) : (
                            <>
                                <Heart size={18} />
                                Add to Wishlist
                            </>
                        )}
                    </button>

                </div>
            </div>
        </div>
    )
}