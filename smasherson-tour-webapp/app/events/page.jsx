'use client'
import { useEffect, useState } from 'react'

export const eventsPlaceHolderData = [
    {
        id: 1,
        eventName: 'Long Drive',
        date: '2023-07-15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://source.unsplash.com/random/800x600?golf-balls',
        slug: 'long-drive',
    },
    {
        id: 2,
        eventName: 'Closest to the Pin',
        date: '2023-08-10',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://source.unsplash.com/random/800x600?golf-course',
        slug: 'clostest-to-the-pin',
    },
    {
        id: 3,
        eventName: 'Longest Putt',
        date: '2023-09-05',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://source.unsplash.com/random/800x600?golfer',
        slug: 'longest-putt',
    },
    {
        id: 4,
        eventName: '2v2s',
        date: '2023-10-01',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://source.unsplash.com/random/800x600?golf',
        slug: '2v2s',
    },
    {
        id: 5,
        eventName: '3v3s',
        date: '2023-10-01',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://source.unsplash.com/random/800x600?golf-player',
        slug: '3v3s',
    },
    {
        id: 6,
        eventName: 'East vs West',
        date: '2023-10-01',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://source.unsplash.com/random/800x600?golf-tournament',
        slug: 'east-vs-west',
    },

    // Add more event objects here
]

const EventsPage = ({ data = [] }) => {
    const [eventsData, setEventsData] = useState([])

    useEffect(() => {
        setEventsData(eventsPlaceHolderData)
    }, [data])

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventsData.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-lg shadow-md p-4"
                    >
                        <img
                            src={event.imageUrl}
                            alt={event.eventName}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            {event.eventName}
                        </h2>
                        <p className="text-gray-500 mb-4">
                            {event.description}
                        </p>
                        <a
                            href={`/events/${event.id}`}
                            className="text-blue-500 font-semibold"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

EventsPage.defaultProps = {
    data: eventsPlaceHolderData,
}

export default EventsPage
