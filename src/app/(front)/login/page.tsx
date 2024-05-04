import LoginForm from '@/components/Auth/LoginForm'
import React from 'react'

const page = () => {
    return (
        <div className=' bg-blue-100 min-h-screen py-8'>
            <div
                className="grid grid-cols-1 md:grid-cols-2
                 w-full max-w-5xl mx-auto  bg-white border
                  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                <div className=" hidden lg:flex linear-bg"></div>
                <div className="">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default page