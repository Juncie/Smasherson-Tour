import React from 'react'

export default function PageHeader(props: {
    title: string
    subtitle?: string
}) {
    return (
        <>
            <div className="mb-16 w-screen h-48 bg-slate-800 z-50 flex items-center justify-center uppercase header-bg">
                <h1 className="lg:text-4xl tracking-wider">
                    {props.title && props.title}
                </h1>
                {props.subtitle && <p>{props.subtitle}</p>}
            </div>
        </>
    )
}
