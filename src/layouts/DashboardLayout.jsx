import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { contextData } from '../lib/provider/ContextProvider'
import Usersidabar from '../components/Usersidabar'

export default function DashboardLayout() {

    const { login } = useContext(contextData)
    const navigate = useNavigate()

    useEffect(() => {
        if (!login) {
            navigate('/login', { replace: true })
        }
    }, [login, navigate])

    if (!login) return null

    return (
        <div className="w-full min-h-screen bg-slate-50">

            <div className="w-full ">

                <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] gap-4 lg:gap-6">

                    {/* Sidebar */}
                    <Usersidabar />

                    {/* Dashboard Content */}
                    <main className="min-w-0 w-full overflow-hidden">
                        <Outlet />
                    </main>

                </div>

            </div>

        </div>
    )
}
