import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DoctorCard = ({ isInPerson = false }: { isInPerson?: boolean }) => {
    const timeStamp = [
        {
            id: 1,
            time: '8:30',
            period: 'am'
        },
        {
            id: 2,
            time: '9:30',
            period: 'am'
        },
        {
            id: 3,
            time: '10:30',
            period: 'am'
        },
        {
            id: 4,
            time: '11:30',
            period: 'am'
        },
        {
            id: 5,
            time: '12:30',
            period: 'pm'
        },
        {
            id: 6,
            time: '13:30',
            period: 'pm'
        },
        {
            id: 7,
            time: '14:30',
            period: 'pm'
        },
    ]
    return (
        <div className='border border-gray-200 bg-white inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all'>
            <Link href={'/doctors/slug'}>
                <h2 className=' uppercase font-bold text-2xl tracking-wider'>Maya Tunde Olawale MD,PA-C</h2>
                {
                    isInPerson && (
                        <p className='py-3'>No-25, Lincoln highway, Kendal park,NJ 08824</p>
                    )
                }

                <div className="flex items-center gap-4 py-4">
                    <div className="relative">
                        <Image
                            src={'/doc.webp'}
                            width={612}
                            height={459}
                            alt='doctor image'
                            className='w-24 h-24 rounded-full object-cover'
                        />
                        {
                            !isInPerson && (
                                <p className=' bg-blue-200 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full absolute bottom-0 right-0'>
                                    <Video className='w-6 h-6' />
                                </p>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='flex items-center'>
                            <Stethoscope className='w-4 h-4 mr-2 flex-shrink-0' />
                            <span>Family Medicine</span>
                        </p>
                        <p className='bg-green-200 py-3 px-6 uppercase'>
                            Available today
                        </p>
                    </div>
                </div>
            </Link>
            <div className="pt-6 border-t border-gray-400">
                <h3 className='flex gap-4 justify-between items-center'>
                    <span className='text-gray-600'>Tue, Mar 12 </span> <span className='font-bold'>$127</span>
                </h3>
                <div className="py-3 grid grid-cols-3 gap-4">
                    {
                        timeStamp.slice(0, 5).map((i) => (
                            <Link className='bg-blue-600 py-2 text-sm px-3 text-white text-center' href={'#'} key={i.id}>
                                {i.time} {i.period}
                            </Link>
                        ))
                    }
                    <Link className='bg-blue-900 text-white text-sm py-2 px-3 text-nowrap' href='/doctors/slug'>More times</Link>
                </div>
            </div>
        </div >
    )
}

export default DoctorCard