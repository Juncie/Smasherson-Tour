import React, { ReactNode } from 'react'

export type EventProps = {
    id: number
    name: string
    event_type?: string
    scoring?: string
    event_entry?: string
    start_time?: string
    end_time?: string
    is_private?: boolean
    registration_deadline?: string
    event_poster?: string
    status?: string
    user_registered?: boolean
    scorecard_uploaded?: boolean
}

type ButtonProps = {
    text?: string
    textColor?: string
    textHoverColor?: string
    icon?: ReactNode
    href?: string
    onClick?: () => void
    children?: ReactNode
    className?: string
}