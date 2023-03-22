import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SidebarItems } from './SidebarItems'

export const Sidebar = () => {

    const [active, setAtive] = useState("")
    let path = window.location.pathname;

    useEffect(() => {
        if (path === "/") setAtive('Dashboard')
        else if (path === '/users') setAtive('User Management')
        else if (path === '/vendor') setAtive('Vendor Management')
        else if (path === '/booking-logs') setAtive('Booking Logs')
        else if (path === '/payment-logs') setAtive('Payment Logs')
        else if (path === '/feedback-management') setAtive('Feedback Management')
        else if (path === '/event-management') setAtive('Event Management')
        else if (path === '/service-management') setAtive('Service Management')

    }, [path])


    return (
        <>
            <div className="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
                <div className="main-menu-content">
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

                        {
                            SidebarItems && (
                                SidebarItems?.map((menu, index) => (
                                    <>
                                        <li className={`nav-item ${active == menu.title ? "active" : ""}`} key={index}>
                                            <Link to={menu?.path}><img src={menu?.icon} alt="" />
                                                <span className="menu-title" data-i18n>{menu?.title}</span></Link>
                                        </li>
                                    </>
                                ))
                            )
                        }

                    </ul>
                </div>
            </div>

        </>
    )
}
