import React, { useState, useEffect, use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'

import SectionHeader from '@/components/shared/SectionHeader'
import EventsCard from '@/components/widgets/EventsCard'

import { getEvents } from '@/lib/getEvents'
import { Event } from '@/types'

export default function EventsSlider() {
    const eventData = use(getEvents())

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <SectionHeader
                title="FEATURED EVENTS"
                actionTitle="View All"
                actionURL="/events"
                titleSize="4xl"
                className="pb-8"
                titleClass="tracking-wider"
            />

            <div className="container mx-auto">
                <Swiper
                    className="mySwiper flex flex-col justify-center mb-4 mx-auto"
                    spaceBetween={30}
                    slidesPerView={4}
                    modules={[Navigation, A11y]}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {eventData.map((event: Event) => (
                        <SwiperSlide
                            key={event.id}
                            className="outline outline-2 outline-gray-800"
                        >
                            <EventsCard
                                id={event.id}
                                name={event.name}
                                poster={event.event_poster}
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
