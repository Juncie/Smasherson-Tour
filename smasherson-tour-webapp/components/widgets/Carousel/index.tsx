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
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="">
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

const demoProps: CarouselProps = {
    data: [
        {
            id: 1,
            slideTitle: 'Smash Golf Tour',
            slideSubtitle: 'Subtitle 1',
            imageURL: 'https://dummyimage.com/1250x750/000/000',
        },
        {
            id: 2,
            slideTitle: 'Slide 2',
            slideSubtitle: 'Subtitle 2',
            imageURL: 'https://dummyimage.com/1250x750/000/000',
        },
        {
            id: 3,
            slideTitle: 'Slide 3',
            slideSubtitle: 'Subtitle 3',
            imageURL: 'https://dummyimage.com/1250x750/000/000/',
        },
        {
            id: 4,
            slideTitle: 'Slide 4',
            slideSubtitle: 'Subtitle 4',
            imageURL: 'https://dummyimage.com/1250x750/000/000/',
        },
        {
            id: 5,
            slideTitle: 'Slide 5',
            slideSubtitle: 'Subtitle 5',
            imageURL: 'https://dummyimage.com/1250x750/000/000/',
        },
    ],
}
