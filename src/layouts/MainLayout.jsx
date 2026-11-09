import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function
    () {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}
