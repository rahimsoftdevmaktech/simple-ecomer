import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { contextData } from '../lib/provider/ContextProvider'

export default function ProductContainer() {

    const { login, myList, setMyList, products, myWishList, setWishList } = useContext(contextData)

    const [search, setSearch] = useState('')
    const [productResult, setProductResult] = useState(products)

    useEffect(() => {

        setTimeout(() => {
            const result = products.filter((pro) =>
                pro.name.toLowerCase().includes(search.toLowerCase()) ||
                pro.description.toLowerCase().includes(search.toLowerCase())
            )

            setProductResult(result)
        }, 500);

    }, [search, products])

    return (
        <section className="mt-16">

            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                {/* Heading */}
                <div className="text-center mb-10">

                    <span className="text-green-600 font-bold tracking-widest text-sm uppercase">
                        Our Collection
                    </span>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3">
                        Explore Our Products
                    </h1>

                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Discover our latest collection and find the perfect products for you.
                    </p>

                </div>

                {/* Search */}
                <div className="max-w-xl mx-auto mb-10">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search your favorite products..."
                            name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border border-gray-200 bg-white py-4 pl-5 pr-12 rounded-full outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all shadow-sm"
                        />

                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                            ⌕
                        </span>

                    </div>

                </div>

                {/* Product Count */}
                <div className="flex items-center justify-between mb-5">

                    <h2 className="text-xl font-bold text-gray-800">
                        All Products
                    </h2>

                    <span className="text-sm text-gray-500">
                        {productResult.length} Products Found
                    </span>

                </div>

                {/* Products Grid */}
                {
                    productResult.length > 0 ? (

                        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">

                            {productResult.map((product, i) => (
                                <ProductCard
                                    product={product}
                                    myList={myList}
                                    setMyList={setMyList}
                                    login={login}
                                    myWishList={myWishList}
                                    setWishList={setWishList}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="text-center py-20 bg-gray-50 rounded-2xl">

                            <div className="text-5xl mb-4">
                                🔍
                            </div>

                            <h2 className="text-2xl font-bold text-gray-700">
                                No Products Found
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Try searching with a different keyword.
                            </p>

                            <button
                                onClick={() => setSearch('')}
                                className="mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
                            >
                                Clear Search
                            </button>

                        </div>

                    )
                }

            </div>

        </section>
    )
}
