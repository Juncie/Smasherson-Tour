'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import Slide from './CarouselSlide'
import { SlideType } from './CarouselSlide'
import Hero from '../Hero'

interface CarouselProps {
    data: SlideType[]
}

const Carousel: React.FC<CarouselProps> = ({ data }: CarouselProps) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [slides, setSlides] = useState<SlideType[]>([])

    useEffect(() => {
        if (data) {
            setSlides(data)
        } else {
            setSlides(demoProps.data)
        }
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
                {slides.map(({children}, index) => (
                    <SwiperSlide key={index} className="">
                        <Slide children={children} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel

const demoProps: CarouselProps = {
    data: [
      {
        children: <Hero />
      },
      {
        children: (
            <h1>
                Hellow World
            </h1>
        )
      }
    ],
}
