import React from 'react'

import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'
import useDateFormat from '@/hooks/formatDate'
import Link from 'next/link'

export default function EventsCard({ id, name, event_poster, start, end }) {
    const startDate = useDateFormat(start)
    const endDate = useDateFormat(end)

    return (
        <div
            className="flex flex-col justify-center items-center w-full h-auto p-8 outline outline-2 outline-gray-800"
            key={id}
        >
            <Image src={event_poster} alt={name} width={400} height={400} />
            <div className="text-justify w-full space-y-2">
                <h3 className="text-xl uppercase tracking-wider">
                    <Balancer>{name}</Balancer>
                </h3>
                <p className="w-full">
                    <Balancer>
                        <span>{startDate}</span>
                    </Balancer>
                </p>
                <Link
                    href={{ pathname: `/events/${id}`, query: { title: name } }}
                    className="text-teal-500"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}
