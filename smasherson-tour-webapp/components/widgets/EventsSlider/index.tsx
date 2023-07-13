import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'

import { eventsPlaceHolderData } from '@/app/events/page'
import SectionHeader from '@/components/shared/SectionHeader'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

export default function EventsSlider() {
    return (
        <div className="flex flex-col justify-center items-center">
            
                <SectionHeader title="FEATURED EVENTS" actionTitle='View All' actionURL='/events' titleSize='4xl' className="pb-8" titleClass='tracking-wider' />
            
            <div className="container">
                <Swiper
                    className="w-full"
                    spaceBetween={30}
                    slidesPerView={4}
                    modules={[Navigation, A11y]}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {eventsPlaceHolderData.map((event) => (
                        <SwiperSlide
                            key={event.id}
                            className="bg-white rounded-lg shadow-md p-4"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={event.imageUrl}
                                alt={event.eventName}
                                className="w-full h-56 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-bold mb-2">
                                {event.eventName}
                            </h2>
                            <Balancer>
                                <p className="text-gray-500 mb-4">
                                    {event.description}
                                </p>
                            </Balancer>
                            <a
                                href={`/events/${event.id}`}
                                className="text-teal-500 hover:text-teal-600"
                            >
                                Learn More
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
