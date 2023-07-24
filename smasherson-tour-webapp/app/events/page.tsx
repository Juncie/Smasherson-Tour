'use client'
import React from 'react'
import { Event as EventType } from '../../types/index'
import EventsCard from '../../components/widgets/EventsCard/'
import useSWR from 'swr'

const API_URL = 'https://staging-be.smasherson.com/api/v1/events/'

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

const EventsPage = () => {
    const { data, error } = useSWR(API_URL, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data)
        return (
            <div className="container w-screen h-96 mx-auto flex justify-center items-center text-6xl">
                Loading...
            </div>
        )

    return (
        <div className="w-full mt-16">
            <div className="container mx-auto">
                <h1 className="text-6xl text-center font-bold tracking-wider uppercase">
                    Smash Tour Events
                </h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-16">
                    {data.data.map((event: EventType) => (
                        <li key={event.id} className="outline rounded-md py-8">
                            <EventsCard
                                id={event.id}
                                name={event.name}
                                poster={event.event_poster}
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

export default EventsPage
