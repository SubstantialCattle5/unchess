"use client"

import { NavBar } from "../../components/Navigation/NavBar"
import Sidebar from "../../components/Navigation/SideBar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Sidebar />
            <NavBar />
            {children}
        </section>)
}