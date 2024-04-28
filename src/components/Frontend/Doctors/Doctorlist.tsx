import Sectionheading from '@/shared/Sectionheading'
import ToggleButton from '@/shared/ToggleButton'
import Link from 'next/link'
import React from 'react'
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'
import DoctorCarousel from '@/shared/DoctorListCarousel'


const Doctorlist = ({ title = 'Telehealth Visit', isInPerson, className = 'bg-pink-100 py-8 lg:py-24' }:
    { title?: string, isInPerson?: boolean, className?: string }) => {

    const doc = [
        {
            id: 1,
        }, {
            id: 2,
        }, {
            id: 3,
        }, {
            id: 4,
        }, {
            id: 5,
        }, {
            id: 6,
        }, {
            id: 7,
        }, {
            id: 8,
        }, {
            id: 9,
        }, {
            id: 10,
        },
    ]
    return (
        <div className={className}>
            <div className="max-w-6xl mx-auto">
                <Sectionheading title={title} />
                <div className="py-4 flex items-center justify-between">
                    {
                        isInPerson ? (
                            <Link href='' className='text-blue-500 text-sm flex items-center font-semibold'>
                                <Map className=' mr-2 flex-shrink-0 w-4 h-4' />
                                <span>Map View</span>
                            </Link>
                        ) : (
                            <ToggleButton />
                        )
                    }
                    <Link className='py-3 px-6 border border-blue-600 bg-white' href={'#'}>See All</Link>
                </div>
                <div className='py-6'>
                    <DoctorCarousel isInPerson={isInPerson} doc={doc} />
                </div>
            </div>
        </div>
    )
}

export default Doctorlist