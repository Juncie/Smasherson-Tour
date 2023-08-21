'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'

import SectionHeader from '@/components/shared/SectionHeader'
import YouTube, { YouTubeProps } from 'react-youtube'

export default function FeaturedVideos() {
    const videos = [
        {
            id: 1,
            title: 'The SmashersOn Community is Expanding | Maui Nui Golf Course | Hawaii',
            src: 'dl-zBBTIpjc',
            poster: 'https://img.youtube.com/vi/dl-zBBTIpjc/maxresdefault.jpg',
        },
        {
            id: 2,
            title: 'Do You Make Excuses After A Bad Shot? | Update on Who is Winning the Smash Golf Tour?',
            src: '1O5IUlMDmn8',
            poster: 'https://img.youtube.com/vi/1O5IUlMDmn8/maxresdefault.jpg',
        },
        {
            id: 3,
            title: 'We Had To Extend The Tournament | East Vs West League | SmashTalk',
            src: 'OyHH-mtCpYA',
            poster: 'https://img.youtube.com/vi/OyHH-mtCpYA/maxresdefault.jpg',
        },
        {
            id: 4,
            title: 'The SmashersOn Community is Expanding | Maui Nui Golf Course | Hawaii',
            src: 'dl-zBBTIpjc',
            poster: 'https://img.youtube.com/vi/dl-zBBTIpjc/maxresdefault.jpg',
        },
        {
            id: 5,
            title: 'Do You Make Excuses After A Bad Shot? | Update on Who is Winning the Smash Golf Tour?',
            src: '1O5IUlMDmn8',
            poster: 'https://img.youtube.com/vi/1O5IUlMDmn8/maxresdefault.jpg',
        },
        {
            id: 6,
            title: 'We Had To Extend The Tournament | East Vs West League | SmashTalk',
            src: 'OyHH-mtCpYA',
            poster: 'https://img.youtube.com/vi/OyHH-mtCpYA/maxresdefault.jpg',
        },
    ]

    const opts = {
        width: `${16 * 48}`,
        height: `${9 * 48}`,
        playerVars: {
            autoplay: 1,
        },
    }
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo()
    }
    return (
        <div className="w-full">
            <SectionHeader
                title="FEATURED VIDEOS"
                actionTitle="View All"
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
                    {videos.map(({ id, title, src, poster }: YouTubeProps) => (
                        <SwiperSlide key={id}>
                            <div className="container mx-auto">
                                <div className="flex flex-col">
                                    <div>{title}</div>
                                    <YouTube
                                        videoId={src}
                                        opts={opts}
                                        onReady={onPlayerReady}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
