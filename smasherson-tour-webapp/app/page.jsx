'use client'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

import CarouselSlider from '@/components/widgets/Carousel'
import EventsSlider from '@/components/widgets/EventsSlider'
import CTA_1 from '@/components/widgets/CTA-1'
import CTA_2 from '@/components/widgets/CTA-2'

export default function Home(props) {
    return (
        <>
            <main className="tracking-widest">
                <CarouselSlider />
                <div className="flex flex-col items-center justify-center py-16">
                    <Image
                        src="/assets/images/toptracer-logo.png"
                        alt="Smasherson Logo"
                        width={600}
                        height={600}
                        className='object-contain '
                    />
                </div>
                <section className='dark:bg-gray-900 bg-gray-300 py-24'>
                    <EventsSlider />
                </section>
                <section className='container mx-auto py-16'>
                    <CTA_1 />
                </section>
                <section className='container mx-auto py-16'>
                    <CTA_2 />
                </section>
            </main>
        </>
    )
}
