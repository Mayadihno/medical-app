import Navbar from '@/components/Dashboard/Navbar'
import Sidebar from '@/components/Dashboard/Sidebar'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout