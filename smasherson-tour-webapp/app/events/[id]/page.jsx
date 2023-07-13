'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function EventDetailsPage(props) {
    const router = useRouter()
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Event Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
            <button onClick={router.back}>Back to Events</button>
        </div>
    )
}
