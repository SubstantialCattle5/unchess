"use client"

import Sidebar from "../../components/Navigation/SideBar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <Sidebar />
        {children}
    </section>
}