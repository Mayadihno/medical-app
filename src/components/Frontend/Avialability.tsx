import React, { useState } from 'react'
import { Calendar } from '../ui/calendar'

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
const Avialability = () => {
    const [BookDate, setBookDate] = useState<Date | undefined>(new Date())
    const formatedDate = `${BookDate?.toString().split(" ").slice(0, 4).join(' ')} - GMT ${BookDate?.toString().split("GMT")[1].split(" ")[0]}`
    return (
        <div>
            <h2 className=' font-bold py-4 text-xl uppercase text-slate-500 tracking-wider'>Select a date and time</h2>
            <div className="grid grid-cols-2 lg:gap-0 gap-4">
                <div className=" sm:col-span-1 col-span-full">
                    <Calendar
                        mode="single"
                        selected={BookDate}
                        onSelect={setBookDate}
                        className="rounded-md border"
                    />
                </div>
                <div className=" sm:col-span-1 col-span-full">
                    <div className="px-4">
                        {BookDate &&
                            <h2 className='pb-4 text-blue-700 text-center py-3 px-4 border border-blue-500'>{formatedDate}</h2>
                        }
                        <div className="py-3 grid grid-cols-3 gap-4">
                            {
                                timeStamp.slice(0, 5).map((i) => (
                                    <button className='bg-blue-600 py-2 text-sm px-3 text-white text-center' key={i.id}>
                                        {i.time} {i.period}
                                    </button>
                                ))
                            }
                            <button className='bg-blue-900 text-white text-sm py-2 px-3 text-nowrap'>More time</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avialability