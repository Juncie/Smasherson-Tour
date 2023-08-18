'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const EventDetailsPage = ({ params }) => {
    const router = useRouter()

    const fetcher = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    const URL = `https://staging-be.smasherson.com/api/v1/events/${params.id}`

    const { data, error } = useSWR(URL, fetcher)

    const formattedDate = new Date(data?.data?.start_time).toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    )

    if (error) return <div>Error: {error.message}</div>
    if (!data)
        return (
            <div className="container w-screen h-96 mx-auto flex justify-center items-center text-6xl">
                Loading Event Details..
            </div>
        )

    return (
        <section className="container mx-auto w-full pb-16 ">
            <h1 className="text-5xl uppercase mt-8 tracking-wider text-center">
                {data.data.name && data.data.name}
            </h1>
            <div className="flex mt-8 justify-evenly">
                <div className="flex flex-col space-y-4">
                    <div className="basis-1/2">
                        <Image
                            src={
                                data.data.event_poster && data.data.event_poster
                            }
                            width={650}
                            height={600}
                            alt={data.data.name && data.data.name}
                        ></Image>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-8 rounded-sm">
                    <div className="container mx-auto w-full flex justify-between flex-col h-full">
                        <div className="flex flex-col space-y-4">
                            <div className="space-y-4">
                                <h1 className="text-2xl uppercase mt-8 tracking-wider">
                                    {data.data.name && data.data.name}
                                </h1>
                                <p className="text-xl">{formattedDate}</p>
                                <p className="pt-8 max-w-full">
                                    <Balancer>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Culpa minus, earum
                                        nulla adipisci esse velit doloribus ea
                                        ipsum, perspiciatis vel rerum corrupti
                                        temporibus ex!
                                    </Balancer>
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/login"
                            className="block bg-blue-700 py-4 px-8 uppercase text-center text-white rounded-sm hover:bg-blue-800 transition-all duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pb-16">
                <div className="container mx-auto">
                    <button onClick={() => router.back()}>
                        Back to Events
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsPage
