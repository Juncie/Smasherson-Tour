'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { Grid } from '@mui/material'
import { Card } from 'flowbite-react'

import VideoPlayer from '@/components/VideoPlayer'
import LeaderboardTabs from '@/components/Leaderboard-Tabs'
import heroBG from '@/public/assets/images/hero-bg.png'

import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import CarouselSlider from '@/components/Carousel'

const VIDEO_URL = 'https://www.youtube.com/watch?v=WIEL-VfLCns'
const VIDEO_URL2 = 'https://www.youtube.com/watch?v=fAcBo1TAGYA'

export default function Home(props) {
    return (
        <>
            <main className="tracking-widest space-y-16">
                <div className="flex flex-row w-full justify-center items-center">
                    <CarouselSlider />
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center outline bg-[url('../public/assets/images/hero-bg.png')] bg-cover bg-center">
                        <div
                            id="row-1"
                            className="flex flex-row gap-4 justify-center"
                        >
                            <div id="screen" className="flex justify-end">
                                <Image
                                    src="/assets/images/hero-screen.png"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div id="golfer" className="flex-1">
                                <Image
                                    src="/assets/images/hero-golfer-2.png"
                                    width={650}
                                    height={300}
                                    className="max-h-96 object-contain"
                                />
                            </div>
                        </div>
                        <div id="row-2">
                            <div id="wrapper">
                                <h1 className="uppercase text-[128px] flex flex-col gap-2 justify-center items-center">
                                    <strong>Smash Golf Tour</strong>
                                    <span className="bg-blue text-6xl text-gray-900 bg-blue-500 px-4 py-2 rounded-tl-2xl rounded-br-2xl">
                                        Play. Complete. Win.
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
