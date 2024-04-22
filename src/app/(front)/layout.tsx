import MegaMenu from '@/components/Frontend/MegaMenu'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className=" bg-gray-100">
                <div className="max-w-6xl mx-auto  p-4">
                    <MegaMenu />
                </div>
            </div>
            {children}
        </div>
    )
}

export default Layout