
import React from 'react'
import { Trash2, ShoppingCart, ArrowUpRight } from 'lucide-react'

export default function ListCard({ product, setMyList, myList }) {

    const handleRemove = () => {
        const result = myList.filter((pro) => pro.id !== product.id)
        setMyList(result)
    }

    return (
        <div className="group flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 mt-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row">

            {/* Product Image */}
            <div className="flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:h-36 sm:w-40">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Details */}
            <div className="flex min-w-0 flex-1 flex-col justify-between">

                <div>
                    <div className="flex items-start justify-between gap-3">
                        <h2 className="text-lg font-bold text-slate-800">
                            {product.name}
                        </h2>

                        <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                            Available
                        </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                        {product.description}
                    </p>

                    <p className="mt-3 text-xl font-bold text-blue-600">
                        ৳{product.price}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-4 flex flex-wrap items-center gap-3">

                    <button
                        type="button"
                        onClick={handleRemove}
                        className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                        <Trash2 size={16} />
                        Remove
                    </button>



                </div>
            </div>
        </div>
    )
}
