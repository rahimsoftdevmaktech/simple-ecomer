import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {
    Settings,
    User,
    Mail,
    Bell,
    Package,
    Heart,
    Moon,
    Sun,
    Globe,
    ShieldCheck,
    Save,
    RotateCcw,
    LogOut,
    CheckCircle2
} from 'lucide-react'

import { contextData } from '../lib/provider/ContextProvider'

export default function SettingsPage() {

    const { setLogin } = useContext(contextData)
    const navigate = useNavigate()

    // Get auth information
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

    // Default settings
    const defaultSettings = {
        emailNotifications: true,
        orderNotifications: true,
        wishlistNotifications: false,
        promotionalNotifications: false,
        language: 'English',
        theme: 'Light'
    }

    // Settings state
    const [settings, setSettings] = useState(() => {
        try {
            const savedSettings = localStorage.getItem('userSettings')

            return savedSettings
                ? { ...defaultSettings, ...JSON.parse(savedSettings) }
                : defaultSettings
        } catch {
            return defaultSettings
        }
    })

    const [saved, setSaved] = useState(false)

    // Handle toggle changes
    const handleToggle = (name) => {
        setSettings(prev => ({
            ...prev,
            [name]: !prev[name]
        }))

        setSaved(false)
    }

    // Handle select changes
    const handleChange = (e) => {
        const { name, value } = e.target

        setSettings(prev => ({
            ...prev,
            [name]: value
        }))

        setSaved(false)
    }

    // Save settings
    const handleSave = () => {
        localStorage.setItem(
            'userSettings',
            JSON.stringify(settings)
        )

        setSaved(true)
    }

    // Reset settings
    const handleReset = () => {
        setSettings(defaultSettings)
        localStorage.setItem(
            'userSettings',
            JSON.stringify(defaultSettings)
        )

        setSaved(false)
    }

    // Logout
    const handleLogout = () => {
        localStorage.removeItem('auth')
        setLogin(false)
        navigate('/login', { replace: true })
    }

    // Toggle component
    const Toggle = ({ title, description, name }) => (
        <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-100 last:border-0">

            <div>
                <h3 className="font-semibold text-gray-700">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                    {description}
                </p>
            </div>

            <button
                type="button"
                onClick={() => handleToggle(name)}
                aria-label={`Toggle ${title}`}
                aria-pressed={settings[name]}
                className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${settings[name] ? 'bg-green-600' : 'bg-gray-300'
                    }`}
            >
                <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${settings[name] ? 'left-7' : 'left-1'
                        }`}
                />
            </button>

        </div>
    )

    return (
        <div className="min-h-screen w-full bg-slate-50 p-4 sm:p-6 lg:p-8">

            <div className=" mx-auto space-y-7">

                {/* Header */}
                <div>
                    <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                            <Settings size={27} />
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                                Settings
                            </h1>

                            <p className="text-sm text-slate-500 mt-1">
                                Manage your account preferences and settings.
                            </p>
                        </div>

                    </div>
                </div>


                {/* Profile Information */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                            <User size={22} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg text-slate-800">
                                Account Information
                            </h2>

                            <p className="text-sm text-slate-500">
                                Your account details
                            </p>
                        </div>

                    </div>


                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                        <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <User size={38} />
                        </div>

                        <div className="flex-1 space-y-2">

                            <h3 className="text-xl font-bold capitalize text-slate-800">
                                {userName}
                            </h3>

                            <p className="text-sm text-slate-500 flex items-center gap-2">
                                <Mail size={16} />
                                {email}
                            </p>

                            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                                <CheckCircle2 size={14} />
                                Active Account
                            </span>

                        </div>

                    </div>

                </div>


                {/* Notification Settings */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6">

                    <div className="flex items-center gap-3 mb-3">

                        <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                            <Bell size={22} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg text-slate-800">
                                Notifications
                            </h2>

                            <p className="text-sm text-slate-500">
                                Manage your notification preferences
                            </p>
                        </div>

                    </div>


                    <Toggle
                        title="Email Notifications"
                        description="Receive important updates through email."
                        name="emailNotifications"
                    />

                    <Toggle
                        title="Order Notifications"
                        description="Get updates about your order status."
                        name="orderNotifications"
                    />

                    <Toggle
                        title="Wishlist Notifications"
                        description="Get updates about your wishlist products."
                        name="wishlistNotifications"
                    />

                    <Toggle
                        title="Promotional Notifications"
                        description="Receive offers, discounts and promotional updates."
                        name="promotionalNotifications"
                    />

                </div>


                {/* Appearance and Preferences */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                            <Globe size={22} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg text-slate-800">
                                Preferences
                            </h2>

                            <p className="text-sm text-slate-500">
                                Customize your shopping experience
                            </p>
                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Language */}
                        <div>

                            <label className="flex items-center gap-2 font-semibold text-sm text-slate-700 mb-3">
                                <Globe size={17} />
                                Language
                            </label>

                            <select
                                name="language"
                                value={settings.language}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            >
                                <option value="English">English</option>
                                <option value="Bangla">Bangla</option>
                            </select>

                        </div>


                        {/* Theme */}
                        <div>

                            <label className="flex items-center gap-2 font-semibold text-sm text-slate-700 mb-3">
                                {settings.theme === 'Light'
                                    ? <Sun size={17} />
                                    : <Moon size={17} />
                                }
                                Theme
                            </label>

                            <select
                                name="theme"
                                value={settings.theme}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            >
                                <option value="Light">Light</option>
                                <option value="Dark">Dark</option>
                            </select>

                        </div>

                    </div>

                    <p className="mt-4 text-xs text-slate-400">
                        These preferences are saved locally. They do not automatically change your entire website's language or theme.
                    </p>

                </div>


                {/* Security Section */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-6">

                    <div className="flex items-center gap-3">

                        <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                            <ShieldCheck size={22} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg text-slate-800">
                                Security
                            </h2>

                            <p className="text-sm text-slate-500">
                                Manage your account security
                            </p>
                        </div>

                    </div>

                    <div className="mt-5 border-t border-gray-100 pt-5">

                        <p className="text-sm text-slate-600">
                            Your account is currently using demo frontend authentication.
                        </p>

                        <p className="text-xs text-slate-400 mt-2">
                            Password management will be available when backend authentication is connected.
                        </p>

                    </div>

                </div>


                {/* Save and Reset Buttons */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">

                    <button
                        onClick={handleReset}
                        className="flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-600 px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
                    >
                        <RotateCcw size={18} />
                        Reset Settings
                    </button>


                    <button
                        onClick={handleSave}
                        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
                    >
                        <Save size={18} />
                        Save Settings
                    </button>

                </div>


                {/* Save Message */}
                {saved && (
                    <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 text-green-700 p-4 text-sm font-medium">
                        <CheckCircle2 size={19} />
                        Settings saved successfully!
                    </div>
                )}


                {/* Logout */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5 sm:p-6">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                        <div>
                            <h2 className="font-bold text-red-700">
                                Logout from your account
                            </h2>

                            <p className="text-sm text-red-500 mt-1">
                                You will be redirected to the login page.
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}
