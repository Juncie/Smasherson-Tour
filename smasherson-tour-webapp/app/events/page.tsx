'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { Event } from '../../types/index'
import { getEvents } from '../../lib/getEvents'
import EventsCard from '../../components/widgets/EventsCard/'

export default async function EventsPage() {
    const events = await getEvents()

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Events</h1>
            <ul>
                {events.map((event: Event) => (
                    <EventsCard
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        poster={event.event_poster}
                        start={event.start_time}
                        end={event.end_time}
                    />
                ))}
            </ul>
        </div>
    )
}
