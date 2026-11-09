import React, { useState } from 'react'
import {
    MapPin,
    Home,
    BriefcaseBusiness,
    Plus,
    Pencil,
    Trash2,
    Phone,
    User,
    Check,
    X,
    MapPinned
} from 'lucide-react'

export default function AddressPage() {

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            type: 'Home',
            name: 'Rahim Ahmed',
            phone: '+880 1712-345678',
            address: 'Kaliakoi Bazar, Kaliakoi',
            city: 'Gazipur',
            state: 'Dhaka',
            country: 'Bangladesh',
            zip: '1750',
            isDefault: true
        },
        {
            id: 2,
            type: 'Office',
            name: 'Rahim Ahmed',
            phone: '+880 1812-456789',
            address: 'Kaliakoi Industrial Area',
            city: 'Gazipur',
            state: 'Dhaka',
            country: 'Bangladesh',
            zip: '1750',
            isDefault: false
        }
    ])

    const [showForm, setShowForm] = useState(false)
    const [editId, setEditId] = useState(null)

    const initialForm = {
        type: 'Home',
        name: '',
        phone: '',
        address: '',
        city: 'Gazipur',
        state: 'Dhaka',
        country: 'Bangladesh',
        zip: '1750'
    }

    const [formData, setFormData] = useState(initialForm)

    // Input Change
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Add / Update Address
    const handleSubmit = (e) => {
        e.preventDefault()

        if (editId) {
            setAddresses((prev) =>
                prev.map((item) =>
                    item.id === editId
                        ? { ...item, ...formData }
                        : item
                )
            )
        } else {
            setAddresses((prev) => [
                ...prev,
                {
                    ...formData,
                    id: Date.now(),
                    isDefault: prev.length === 0
                }
            ])
        }

        setFormData(initialForm)
        setEditId(null)
        setShowForm(false)
    }

    // Edit Address
    const handleEdit = (item) => {
        setFormData({
            type: item.type,
            name: item.name,
            phone: item.phone,
            address: item.address,
            city: item.city,
            state: item.state,
            country: item.country,
            zip: item.zip
        })

        setEditId(item.id)
        setShowForm(true)
    }

    // Delete Address
    const handleDelete = (id) => {
        const updated = addresses.filter(
            (item) => item.id !== id
        )

        if (addresses.find((item) => item.id === id)?.isDefault && updated.length > 0) {
            updated[0].isDefault = true
        }

        setAddresses(updated)
    }

    // Set Default Address
    const handleDefault = (id) => {
        setAddresses((prev) =>
            prev.map((item) => ({
                ...item,
                isDefault: item.id === id
            }))
        )
    }

    const closeForm = () => {
        setShowForm(false)
        setEditId(null)
        setFormData(initialForm)
    }

    return (
        <div className="w-full min-h-screen bg-slate-50 p-4 md:p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="text-blue-600" size={26} />

                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                            My Addresses
                        </h1>
                    </div>

                    <p className="text-sm text-slate-500">
                        Manage your delivery addresses.
                    </p>
                </div>

                <button
                    onClick={() => {
                        setEditId(null)
                        setFormData(initialForm)
                        setShowForm(true)
                    }}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                >
                    <Plus size={20} />
                    Add New Address
                </button>

            </div>

            {/* Address Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Total Addresses</p>
                    <h2 className="text-3xl font-bold text-slate-800 mt-2">
                        {addresses.length}
                    </h2>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Default Address</p>
                    <h2 className="text-lg font-bold text-green-600 mt-3">
                        {addresses.find((item) => item.isDefault)?.type || 'Not Set'}
                    </h2>
                </div>

            </div>

            {/* Address Cards */}
            {addresses.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-slate-100">
                    <MapPinned size={45} className="mx-auto text-slate-300 mb-4" />
                    <h2 className="text-xl font-bold text-slate-800">
                        No Addresses Found
                    </h2>
                    <p className="text-sm text-slate-500 mt-2">
                        Add an address to get started.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {addresses.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6"
                        >

                            <div className="flex items-center justify-between mb-5">

                                <div className="flex items-center gap-3">

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                        item.type === 'Home'
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'bg-purple-50 text-purple-600'
                                    }`}>
                                        {item.type === 'Home'
                                            ? <Home size={23} />
                                            : <BriefcaseBusiness size={23} />
                                        }
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-800">
                                            {item.type} Address
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            Delivery Location
                                        </p>
                                    </div>

                                </div>

                                {item.isDefault && (
                                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-2 rounded-full">
                                        <Check size={14} />
                                        DEFAULT
                                    </span>
                                )}

                            </div>

                            <div className="space-y-3 border-t border-slate-100 pt-5">

                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <User size={17} className="text-slate-400 shrink-0" />
                                    {item.name}
                                </div>

                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Phone size={17} className="text-slate-400 shrink-0" />
                                    {item.phone}
                                </div>

                                <div className="flex items-start gap-3 text-sm text-slate-600 leading-6">
                                    <MapPin size={17} className="text-slate-400 shrink-0 mt-1" />
                                    <p>
                                        {item.address}, {item.city}, {item.state},
                                        {' '}{item.country} - {item.zip}
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-slate-100">

                                <button
                                    onClick={() => handleEdit(item)}
                                    className="flex-1 flex items-center justify-center gap-2 border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl py-2.5 text-sm font-semibold transition"
                                >
                                    <Pencil size={16} />
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="flex-1 flex items-center justify-center gap-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl py-2.5 text-sm font-semibold transition"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>

                                {!item.isDefault && (
                                    <button
                                        onClick={() => handleDefault(item.id)}
                                        className="w-full text-sm font-semibold text-slate-500 hover:text-green-600 py-1 transition"
                                    >
                                        Set as Default Address
                                    </button>
                                )}

                            </div>

                        </div>
                    ))}

                </div>
            )}

            {/* Add / Edit Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6">

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">
                                    {editId ? 'Edit Address' : 'Add New Address'}
                                </h2>
                                <p className="text-sm text-slate-500 mt-1">
                                    Enter your delivery information.
                                </p>
                            </div>

                            <button
                                onClick={closeForm}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Address Type
                                </label>

                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                >
                                    <option value="Home">Home</option>
                                    <option value="Office">Office</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter full name"
                                    className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+880 1XXXXXXXXX"
                                    className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Street / Area Address
                                </label>
                                <input
                                    required
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter street or area"
                                    className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        City
                                    </label>
                                    <input
                                        required
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        State / Division
                                    </label>
                                    <input
                                        required
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Country
                                    </label>
                                    <input
                                        required
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        ZIP Code
                                    </label>
                                    <input
                                        required
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        className="w-full h-12 border border-slate-200 rounded-xl px-4 outline-none focus:border-blue-500"
                                    />
                                </div>

                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeForm}
                                    className="flex-1 h-12 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                                >
                                    {editId ? 'Update Address' : 'Save Address'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            )}

        </div>
    )
}