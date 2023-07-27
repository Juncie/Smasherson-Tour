import React from 'react'

import { Balancer } from 'react-wrap-balancer'

import Image from 'next/image'
import Link from 'next/link'

import useDateFormat from '@/hooks/formatDate'

export default function EventsCard({ id, name, event_poster, start, end }) {
    const startDate = useDateFormat(start)
    const endDate = useDateFormat(end)

    return (
        <div
            className="flex flex-col justify-center items-center w-full h-full p-8 outline outline-2 outline-gray-800 rounded-sm"
            key={id}
        >
            <Image
                src={event_poster}
                alt={name}
                width={800}
                height={800}
                className={`mb-4`}
            />
            <div className="text-justify w-full space-y-4 flex justify-between flex-col max-h-24">
                <div>
                    <h3 className="text-xl uppercase tracking-wider">
                        <Balancer>{name}</Balancer>
                    </h3>
                    <p className="w-full">
                        <Balancer>
                            <span>{startDate}</span>
                        </Balancer>
                    </p>
                </div>
                <Link
                    href={{ pathname: `/events/${id}`, query: { name: name } }}
                    className="text-teal-500 hover:text-teal-700 transition-all duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}
