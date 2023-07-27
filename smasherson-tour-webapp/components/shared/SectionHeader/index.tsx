import Link from 'next/link'
import React from 'react'

export interface SectionHeaderProps {
    title: string
    titleSize?: titleSize
    subtitle?: string
    subTitleSize?: titleSize
    actionTitle?: string
    actionURL?: string
    border?: boolean
    className?: string
    titleClass?: string
}

type titleSize =
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'

export default function SectionHeader(props: SectionHeaderProps) {
    const {
        title,
        titleSize = '4xl',
        subtitle,
        subTitleSize,
        actionTitle,
        actionURL,
        border = false,
        className,
        titleClass,
    } = props

    return (
        <div
            className={`
                flex justify-between container mx-auto pb-2 
                ${border && 'border-b-2'}
                ${className && className}
            `}
        >
            <div>
                <h2
                    className={`text-${titleSize} font-semibold ${
                        titleClass && titleClass
                    }`}
                >
                    {title}
                </h2>
                <p className={`text-md ${subTitleSize}`}>{subtitle}</p>
            </div>
            <div className="flex gap-2 items-center">
                {actionTitle && (
                    <Link href={actionURL} className="text-blue-500">
                        {actionTitle}
                    </Link>
                )}
            </div>
        </div>
    )
}
