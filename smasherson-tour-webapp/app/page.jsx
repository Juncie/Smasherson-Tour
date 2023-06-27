'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { Grid } from '@mui/material'
import { Card } from 'flowbite-react'

import VideoPlayer from '@/components/VideoPlayer'
import LeaderboardTabs from '@/components/Leaderboard-Tabs'

import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const VIDEO_URL = 'https://www.youtube.com/watch?v=WIEL-VfLCns'
const VIDEO_URL2 = 'https://www.youtube.com/watch?v=fAcBo1TAGYA'

export default function Home(props) {
    return (
        <>
            <main className="mx-auto space-y-6 max-w-screen-2xl container tracking-widest">
                <section
                    id="Hero"
                    className="bg-[url('../public/assets/images/hero-bg.png')] py-24 min-h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center space-y-6"
                >
                    <div className="">
                        <div className="container mx-auto text-center flex flex-col gap-8 rounded-md bg-black py-8 px-16 bg-opacity-75">
                            <h1 className="text-7xl font-extrabold dark:text-white text-center text-white">
                                Smash Golf Tour
                                <br />
                                <span className="text-5xl text-primary line-clamp-1  font-bold">
                                    Competitive Golf League
                                </span>
                            </h1>
                            <Link href="" target="_blank">
                                <Image
                                    src="/assets/images/toptracer-logo.png"
                                    width={400}
                                    height={200}
                                    className="my-2 mx-auto"
                                    alt="Powered By Toptracer"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="bg-gray-400 w-full overflow-hidden py-4">
                    <div className="justify-start h-scroll flex flex-row gap-8">
                        <h1>GOODGOOD</h1>
                        <h1>BRAND 2</h1>
                        <h1>BRAND 3</h1>
                        <h1>BRAND 4</h1>
                        <h1>BRAND 5</h1>
                    </div>
                </div>

                <Grid container spacing={2} className="flex justify-center">
                    <Grid id="left" item lg={3} sm={12}>
                        <Card className="dark:bg-inherit">
                            <h3 className="font-medium">Follow Us!</h3>
                            <ul className="flex">
                                <li className="">
                                    <a href="">
                                        <AiFillFacebook
                                            size={32}
                                            color="#3b5998"
                                        />
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://meta.com">
                                        <AiFillYoutube
                                            size={32}
                                            color="#FF0000"
                                        />
                                    </a>
                                </li>
                                <li className="w-6">
                                    <small>
                                        <a href="https://instagram.com">
                                            <AiFillInstagram
                                                size={32}
                                                color="#fbad50"
                                            />
                                        </a>
                                    </small>
                                </li>

                                <li className="w-6">
                                    <small>
                                        <a href="https://twitter.com">
                                            <AiFillTwitterSquare size={32} />
                                        </a>
                                    </small>
                                </li>
                            </ul>
                        </Card>
                    </Grid>

                    <Grid id="main-feed" item lg={6} sm={12}>
                        <div className="container flex justify-center flex-col gap-4">
                            <article>
                                <Card className="">
                                    <div>
                                        <h3 className="text-2xl">
                                            <strong>
                                                2v2 REVENGE BATTLE - TONIGHT
                                            </strong>
                                        </h3>
                                        <p className='text-gray-400'>Watch J-Dawg and the Golf Kid go Head to Head for the second time!</p>
                                    </div>
                                    <div className="">
                                        <Image
                                            src="/match-1.jpg"
                                            width={800}
                                            height={400}
                                        />
                                    </div>
                                    <div>
                                        <small className="py-1 px-4 bg-red-600 rounded-full inline-flex justify-center">
                                            Live at 8:00 PM EST
                                        </small>
                                    </div>
                                </Card>
                            </article>
                            <article id="Leaderboards" className="">
                                <LeaderboardTabs />
                            </article>
                            <article id="welcome">
                                <div className="container space-y-6">
                                    <VideoPlayer
                                        light
                                        url={VIDEO_URL}
                                        headerTitle="Spanish Bay Knockout Challenge"
                                        width={800}
                                        height={400}
                                    />
                                </div>
                            </article>

                            <article id="welcome">
                                <div className="container">
                                    <VideoPlayer
                                        light={
                                            <Image
                                                src="/tragic-golfer.png"
                                                width={800}
                                                height={800}
                                            />
                                        }
                                        url={VIDEO_URL2}
                                        width={800}
                                        height={400}
                                        headerTitle="Maddness at the Ranch"
                                    />
                                </div>
                            </article>
                        </div>
                    </Grid>

                    <Grid item lg={3} sm={12}>
                        <aside>
                            <article>
                                <Card className="bg-slate-100">
                                    <div className="mb-4 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
                                        <h5 className="font-medium leading-none text-gray-900 dark:text-white">
                                            <strong>Latest Videos</strong>
                                        </h5>
                                        <a
                                            href="#"
                                            className="text-sm font-medium transition duration-300 text-cyan-600 hover:underline dark:text-cyan-500 pb-4"
                                        >
                                            View all
                                        </a>
                                    </div>
                                    <div className="">
                                        <ul className="divide-y-2 space-y-2 divide-gray-200 dark:divide-gray-700">
                                            <li className="flex justify-center">
                                                <div className="text-sm relative">
                                                    <ReactPlayer
                                                        light={
                                                            <Image
                                                                src="/tragic-golfer.png"
                                                                width={300}
                                                                height={200}
                                                            />
                                                        }
                                                        url="https://www.youtube.com/watch?v=fH9x4r2IYyM&t=170s"
                                                        controls
                                                        height={200}
                                                        width={300}
                                                        style={{
                                                            borderRadius: '0',
                                                        }}
                                                    />
                                                    <a
                                                        href="https://www.youtube.com/watch?v=fH9x4r2IYyM&t=170s"
                                                        className="font-medium text-gray-900 dark:text-white pt-2"
                                                    >
                                                        2V2 Knockout Challenge
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="pt-2">
                                                <div className="text-sm container">
                                                    <ReactPlayer
                                                        light={
                                                            <Image
                                                                src="/golfer-1.png"
                                                                width={300}
                                                                height={200}
                                                            />
                                                        }
                                                        url="https://www.youtube.com/watch?v=gkg8tS-oWvk&t=1s"
                                                        controls
                                                        height={200}
                                                        width={300}
                                                        style={{
                                                            marginBottom:
                                                                '0.5rem',
                                                        }}
                                                    />
                                                    <a
                                                        href="https://www.youtube.com/watch?v=gkg8tS-oWvk&t=1s"
                                                        className="font-medium text-gray-900 dark:text-white pt-2"
                                                    >
                                                        Long Drive Championship
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="pt-2">
                                                <div className="text-sm container">
                                                    <ReactPlayer
                                                        light={
                                                            <Image
                                                                src="/golfer-1.png"
                                                                width={300}
                                                                height={200}
                                                            />
                                                        }
                                                        url="https://www.youtube.com/watch?v=n6UfsZ7Yx8I&t=139s"
                                                        controls
                                                        width={300}
                                                        height={200}
                                                        style={{
                                                            marginBottom:
                                                                '0.5rem',
                                                            borderRadius:
                                                                '15rem',
                                                        }}
                                                    />
                                                    <a
                                                        href="https://www.youtube.com/watch?v=n6UfsZ7Yx8I&t=139s"
                                                        className="font-medium text-gray-900 dark:text-white pt-2"
                                                    >
                                                        $1000 Sudden Death
                                                        Showdown
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Card>
                            </article>
                        </aside>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}
