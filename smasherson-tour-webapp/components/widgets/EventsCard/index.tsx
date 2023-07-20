import React from 'react'

import { Event } from '@/types'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

export default function EventsCard({ id, name, poster, start, end }) {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center">
                <Image src={poster} alt={name} width={400} height={400}></Image>
                <div>
                    <h3>{name}</h3>
                    <p>
                        <Balancer>
                            <span>
                                {start} - {end}
                            </span>
                        </Balancer>
                    </p>
                </div>
            </div>
        </div>
    )
}
