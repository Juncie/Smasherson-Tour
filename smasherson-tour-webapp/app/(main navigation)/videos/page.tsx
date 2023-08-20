'use client'
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
    width: `${16 * 48}`,
    height: `${9 * 48}`,
    playerVars: {
        autoplay: 1,
    },
}

let sidebarOpts = {
    width: `${16 * 24}`,
    height: `${9 * 24}`,
    playerVars: {
        autoplay: 1,
    },
}

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
}

export default function VideosPage() {
    return (
        <>
            <section className="py-16 flex items-center justify-center">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <main className="md:w-2/3 space-y-6">
                            {videos.map((video) => (
                                <div key={video.id}>
                                    <YouTube
                                        videoId={video.src}
                                        opts={opts}
                                        onReady={onPlayerReady}
                                    />
                                </div>
                            ))}
                        </main>
                        <aside className="md:w-1/3 space-y-6">
                            {videos.map((video) => (
                                <div key={video.id}>
                                    <YouTube
                                        videoId={video.src}
                                        opts={sidebarOpts}
                                        onReady={onPlayerReady}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}
