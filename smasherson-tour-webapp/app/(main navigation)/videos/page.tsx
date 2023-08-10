'use client'
import TextBlock from '@/components/shared/TextBlock'
import React from 'react'

import YouTube, { YouTubeProps } from 'react-youtube'

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
    height: '390',
    width: `${600 / 1.2}`,
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
}

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
}

export default function VideosPage() {
    return (
        <>
            <section id="video-header">
                <div className="container mx-auto">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {videos.map((video) => (
                            <div key={video.id}>
                                <YouTube
                                    videoId={video.src}
                                    opts={opts}
                                    onReady={onPlayerReady}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </section>
                </div>
            </section>
        </>
    )
}
