'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import Slide from './CarouselSlide'
import { SlideType } from './CarouselSlide'

const Carousel = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [slides, setSlides] = useState<Array<SlideType>>([])

    useEffect(() => {
        data ?? setSlides(data)
    }, [data])

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                navigation={true}
                loop={true}
                centerInsufficientSlides={true}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                className="mySwiper flex flex-col justify-center mb-4 mx-auto"
            >
                {slides.map(({ children }, index) => (
                    <SwiperSlide key={index} className="">
                        <Slide children={children} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel
