import React from 'react'
import { Outlet } from 'react-router'
import Usersidabar from '../components/Usersidabar'

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-slate-50">

            <div className=" mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6">

                    {/* Sidebar */}
                    <Usersidabar />

                    {/* Dashboard Content */}
                    <main className="min-w-0 py-5 sm:py-6">
                        <Outlet />
                    </main>

                </div>

            </div>

        </div>
    )
}
