'use client'
import React, { useState, useEffect, use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'
import useSWR from 'swr'

import 'swiper/css'

import SectionHeader from '@/components/shared/SectionHeader'
import EventsCard from '@/components/widgets/EventsCard'

import { EventProps } from '@/types'

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default function EventsSlider() {
    const API_URL = `https://staging-be.smasherson.com/api/v1/events/`

    const { data, error } = useSWR(API_URL, fetcher)

    if (error) return <div>Error: {error.message}</div>
    if (!data)
        return (
            <div className="container w-screen h-96 mx-auto flex justify-center items-center text-3xl transition-all duration-200">
                Loading Events...
            </div>
        )

    return (
        <div className="w-full">
            <SectionHeader
                title="FEATURED EVENTS"
                actionTitle="View All"
                actionURL="/events"
                titleSize="4xl"
                className="pb-8"
                titleClass="tracking-wider"
            />

            <div className="container flex flex-row mx-auto w-full">
                <Swiper
                    slidesPerView={3}
                    modules={[Navigation, A11y]}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {data.data.map((event: EventProps) => (
                        <SwiperSlide key={event.id} className="p-8">
                            <EventsCard
                                id={event.id}
                                name={event.name}
                                event_poster={event.event_poster}
                                start={event.start_time}
                                end={event.end_time}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
