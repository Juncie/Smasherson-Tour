'use client'
import { EventProps } from '@/types'
import React from 'react'
import useSWR from 'swr'

const EventDetailsPage = ({ params }) => {
    console.log(params)

    const fetcher = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    const URL = `https://staging-be.smasherson.com/api/v1/events/${params.id}}`
    const { data, error } = useSWR(URL, fetcher)
    console.log(data)

    if (error) return <div>Error: {error.message}</div>
    if (!data)
        return (
            <div className="container w-screen h-96 mx-auto flex justify-center items-center text-6xl">
                Loading Event Details..
            </div>
        )

    return (
        <div className="container mx-auto w-full">
            <h1 className="text-7xl uppercase text-center mt-8 tracking-wider">
                {data.data.name}
            </h1>
            <p>{data.data.start_time}</p>
        </div>
    )
}

export default EventDetailsPage
