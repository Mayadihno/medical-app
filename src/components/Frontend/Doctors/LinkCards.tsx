import Link from 'next/link'
import React from 'react'

const LinkCards = ({ className }: { className?: string }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 overflow-hidden'>
            <Link href={'#'} className={`flex rounded-md py-3 px-6 gap-3 bg-slate-800 text-slate-50 ${className}`}>
                <h2>Anxiety</h2>
                <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link href={'#'} className={`flex rounded-md py-3 px-6 gap-3 bg-slate-800 text-slate-50 ${className}`}>
                <h2>Anxiety</h2>
                <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link href={'#'} className={`flex rounded-md py-3 px-6 gap-3 bg-slate-800 text-slate-50 ${className}`}>
                <h2>Anxiety</h2>
                <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link href={'#'} className={`flex rounded-md py-3 px-6 gap-3 bg-slate-800 text-slate-50 ${className}`}>
                <h2>Anxiety</h2>
                <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link href={'#'} className={`flex rounded-md py-3 px-6 gap-3 bg-slate-800 text-slate-50 ${className}`}>
                <h2>Anxiety</h2>
                <span aria-hidden='true'>&rarr;</span>
            </Link>
            <Link href={'#'} className={`flex rounded-md py-3 px-6 gap-3 bg-slate-800 text-slate-50 ${className}`}>
                <h2>Anxiety</h2>
                <span aria-hidden='true'>&rarr;</span>
            </Link>
        </div>
    )
}

export default LinkCards