'use client'
import { Carousel } from 'flowbite-react'

export default function AboutPage(props) {
    return (
        <>
            <main className="tracking-widest">
                <div id="wrapper" className="mx-auto container "></div>
                <div className="pt-8">
                    <Carousel />
                </div>
            </main>
        </>
    )
}
