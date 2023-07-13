import Image from 'next/image'
import React, { ReactElement } from 'react'

export interface SlideType {
    children: React.ReactNode
}

export default function Slide({children}: SlideType): ReactElement {
    return (
        <>
            <div className="w-full h-full">
                {children}
            </div>
        </>
    )
}
