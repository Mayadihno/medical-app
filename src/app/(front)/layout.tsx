import MegaMenu from '@/components/Frontend/MegaMenu'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            {/* <div className=" bg-gray-100">
                <div className=" mx-auto p-4 fixed bg-slate-200 w-full top-20 left-0 right-0 z-50">
                    <MegaMenu />
                </div>
            </div> */}
            <div className="mt-[80px]">
                {children}
            </div>
        </div>
    )
}

export default Layout