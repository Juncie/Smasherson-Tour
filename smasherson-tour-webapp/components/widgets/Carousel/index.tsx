'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import Slide from './CarouselSlide'
import { SlideType } from './CarouselSlide'

interface CarouselProps {
    slides: SlideType[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(0)

    return (
        <>
            <Swiper
                spaceBetween={30}
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
                className="mySwiper flex flex-col justify-center"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Slide
                            imageURL={slide.imageURL}
                            slideAction1={slide.slideAction1}
                            slideAction1URL={slide.slideAction1URL}
                            slideAction2={slide.slideAction2}
                            slideAction2URL={slide.slideAction2URL}
                            slideSubtitle={slide.slideSubtitle}
                            slideTitle={slide.slideTitle}
                            slug={slide.slug}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel
