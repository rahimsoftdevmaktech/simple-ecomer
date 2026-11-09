import React, { useContext } from 'react'
import ListCard from './ListCard'
import { contextData } from '../lib/provider/ContextProvider'
import {
    ShoppingBag,
    PackageOpen,
    ArrowRight,
    ShoppingCart
} from 'lucide-react'
import { Link } from 'react-router'

export default function MyProductsContainer() {

    const { myList, setMyList } = useContext(contextData)

    // Empty State
    if (!myList || myList.length === 0) {
        return (
            <div className="w-full min-h-[500px] bg-slate-50 p-4 md:p-8">

                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                        My Products
                    </h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Manage all your added products here.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm min-h-[380px] flex flex-col items-center justify-center text-center p-6">

                    <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                        <PackageOpen
                            size={45}
                            className="text-blue-500"
                        />
                    </div>

                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                        No Products Added Yet
                    </h2>

                    <p className="text-sm text-slate-500 max-w-sm leading-6 mb-6">
                        You haven't added any products to your list.
                        Explore our collection and add your favorite products.
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
            </div>
        )
    }

    return (
        <div className="w-full min-h-screen bg-slate-50 p-4 md:p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <ShoppingCart
                            size={25}
                            className="text-blue-600"
                        />

                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                            My Products
                        </h1>
                    </div>

                    <p className="text-sm text-slate-500">
                        Manage your selected products.
                    </p>
                </div>

                {/* Product Count */}
                <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm">

                    <p className="text-xs text-slate-400 font-semibold">
                        TOTAL PRODUCTS
                    </p>

                    <p className="text-2xl font-bold text-blue-600">
                        {myList.length}

                        <span className="text-sm text-slate-400 ml-2">
                            Products
                        </span>
                    </p>

                </div>

            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {myList.map((product) => (
                    <ListCard
                        key={product.id}
                        product={product}
                        setMyList={setMyList}
                        myList={myList}
                    />
                ))}

            </div>

        </div>
    )
}