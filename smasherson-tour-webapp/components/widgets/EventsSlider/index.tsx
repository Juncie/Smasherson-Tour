import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'

import SectionHeader from '@/components/shared/SectionHeader'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

export default function EventsSlider() {
    return (
        <div className="flex flex-col justify-center items-center">
            <SectionHeader
                title="FEATURED EVENTS"
                actionTitle="View All"
                actionURL="/events"
                titleSize="4xl"
                className="pb-8"
                titleClass="tracking-wider"
            />

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
                ></Swiper>
            </div>
        </div>
    )
}
