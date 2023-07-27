'use client'
import Image from 'next/image'

import CTA_1 from '@/components/widgets/CTA-1'
import CTA_2 from '@/components/widgets/CTA-2'
import Hero from '@/components/widgets/Hero'
import EventsSlider from '@/components/widgets/EventsSlider'

export default function Home() {
    return (
        <>
            <main className="tracking-widest">
                <Hero title="Smash Golf Tour" subtitle="Play. Compete. Win." />
                <div className="flex flex-col items-center justify-center py-16 bg-gray-400 dark:bg-gray-950">
                    <Image
                        src="/assets/images/toptracer-logo.png"
                        alt="Smasherson Logo"
                        width={600}
                        height={600}
                        className="object-contain "
                    />
                </div>
                <section className="dark:bg-gray-900 py-24">
                    <EventsSlider />
                </section>
                <section className="pt-16">
                    <div className="container mx-auto">
                        <CTA_1 />
                    </div>
                </section>
                <section className="pt-16">
                    <div className="container mx-auto">
                        <CTA_2 />
                    </div>
                </section>
            </main>
        </>
    )
}
