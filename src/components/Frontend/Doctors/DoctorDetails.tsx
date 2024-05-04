'use client'
import React, { useState } from 'react'
import Avialability from '../Avialability'

const DoctorDetails = () => {
    const [active, setActive] = useState(2)
    return (
        <div className="">
            <div className='flex justify-between items-center'>
                <button onClick={() => setActive(1)} className={`${active === 1 ? 'bg-blue-600 text-white' : 'text-slate-800 bg-slate-100 border border-gray-200'} py-4 px-8 w-full uppercase tracking-widest`}>Service Details</button>
                <button onClick={() => setActive(2)} className={`${active === 2 ? 'bg-blue-600 text-white' : 'text-slate-800 bg-slate-100 border border-gray-200'} py-4 px-8 w-full uppercase tracking-widest`}>Availability</button>
            </div>
            <div className="py-8 px-6">
                {
                    active === 1 && (
                        <div className="">
                            Service Details Component
                        </div>
                    )
                }
                {
                    active === 2 && (
                        <div className="">
                            <Avialability />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DoctorDetails