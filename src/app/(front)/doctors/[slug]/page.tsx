import DoctorDetails from '@/components/Frontend/Doctors/DoctorDetails'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-10 mt-[-28px] mb-[150px]">
            <div className="border border-gray-200 mx-auto max-w-4xl bg-white rounded-md shadow-md">
                <div className="py-8 px-6">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <div className="flex flex-col">
                                <h2 className=' uppercase font-bold text-2xl tracking-wider'>Maya Tunde Olawale MD,PA-C</h2>
                                <p className=' uppercase text-sm text-gray-500'>Adult Health </p>
                            </div>
                            <div className="py-3">
                                <p>In-person doctor visit</p>
                                <p>No-25, Lincoln highway, Kendal park,NJ 08824</p>
                            </div>
                        </div>
                        <Image
                            src={'/doc.webp'}
                            width={612}
                            height={459}
                            alt='doctor image'
                            className='w-36 h-36 rounded-full object-cover'
                        />
                    </div>
                </div>
                <div className="">
                    <DoctorDetails />
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white shadow-2xl py-8 px-6 rounded-md flex justify-evenly border border-gray-200 mx-auto">
                <div className="">
                    <p className='text-xl font-bold'>$56</p>
                    <p className=' font-semibold text-sm pt-3'>Tue, Mar 12 - 8.00 AM GMT+3</p>
                </div>
                <button className='px-8 py-3 bg-blue-600 hover:bg-blue-600/80 text-white text-center '>Book</button>
            </div>
        </div>
    )
}

export default page