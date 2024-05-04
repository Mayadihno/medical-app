import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Toaster position='top-center' reverseOrder={false} />
            {children}
        </div>
    )
}

export default Provider