"use client"
import Sidebar from "../../components/SideBar"

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