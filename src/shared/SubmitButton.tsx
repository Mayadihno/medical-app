import { Loader } from 'lucide-react';
import React from 'react'

type SubmitButtonProp = {
    title: string;
    type: "submit" | "reset" | "button" | undefined;
    isLoading: boolean;
    loadingTitle: string;
}
const SubmitButton = ({ title, type = 'submit', isLoading = false, loadingTitle }: SubmitButtonProp) => {
    return (
        <div>
            {
                isLoading ? (
                    <button
                        type={type}
                        disabled
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
                    >
                        <Loader className=' w-4 h-4 mr-2 flex-shrink-0 animate-spin' /> {loadingTitle}
                    </button>
                ) : (
                    <button
                        type={type}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {title}
                    </button>
                )
            }
        </div>
    )
}

export default SubmitButton