'use client'
import React from 'react'
import useSWR from 'swr'

import EventsCard from '../../../components/widgets/EventsCard'
import { EventProps } from '@/types'

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default function EventsPage(): JSX.Element {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [perPage, setPerPage] = React.useState(9)
    const [searchTerm, setSearchTerm] = React.useState('')

    const API_URL = `https://staging-be.smasherson.com/api/v1/events/?page=${currentPage}&per_page=${perPage}&term=${searchTerm}`

    const { data, error } = useSWR(API_URL, fetcher)

    if (error) return <div>Error: {error.message}</div>
    if (!data)
        return (
            <div className="container w-screen h-96 mx-auto flex justify-center items-center text-6xl">
                Loading Events
            </div>
        )

    return (
        <div className="w-full mt-16">
            <div className="container mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-8">
                    {data.data &&
                        data.data.map((event: EventProps) => (
                            <li key={event.id} className="outline rounded-md">
                                <EventsCard
                                    id={event.id}
                                    name={event.name}
                                    event_poster={event.event_poster}
                                    start={event.start_time}
                                    end={event.end_time}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
