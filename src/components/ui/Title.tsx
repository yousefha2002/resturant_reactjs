import React, { ReactNode } from 'react'

type props = {
    children:ReactNode
}

export default function Title({children}:props) {
    return (
        <h3 className='font-bold text-[24px]'>
            {children}
        </h3>
    )
}
