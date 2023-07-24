import React from 'react'

import { Event } from '@/types'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

export default function EventsCard({ id, name, poster, start, end }) {
    return (
        <div
            className="flex flex-col justify-center items-center w-full h-full px-8"
            key={id}
        >
            <Image src={poster} alt={name} width={400} height={400} />
            <div className="text-justify">
                <h3>
                    <Balancer>{name}</Balancer>
                </h3>
                <p>
                    <Balancer>
                        <span>
                            {start} - {end}
                        </span>
                    </Balancer>
                </p>
            </div>
        </div>
    )
}
