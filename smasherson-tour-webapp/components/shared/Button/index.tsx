import Link from 'next/link'
import React from 'react'

import { ButtonProps } from '@/types'

const Button: React.FC<ButtonProps> = ({
    text,
    textColor,
    textHoverColor,
    icon,
    href,
    onClick,
    children,
    className,
}) => {
    const baseStyles = `rounded focus:outline-none block ${
        className ? className : ''
    }`
    const iconStyles = icon ? 'flex items-center' : ''

    return (
        <>
            {href ? (
                <Link
                    href={href}
                    className={`${baseStyles} ${iconStyles} cursor-pointer`}
                    onClick={onClick}
                >
                    {icon && <span className="mr-2">{icon}</span>}
                    <span
                        className={`text-${textColor} hover:text-${textHoverColor}`}
                    >
                        {children || text}
                    </span>
                </Link>
            ) : (
                <button
                    type="button"
                    className={`${baseStyles} ${iconStyles}`}
                    onClick={onClick}
                >
                    {icon && <span className="mr-2">{icon}</span>}
                    <span
                        className={`text-${textColor} hover:text-${textHoverColor}`}
                    >
                        {children || text}
                    </span>
                </button>
            )}
        </>
    )
}

export default Button
