'use client'
import Image from 'next/image'

import CTA_1 from '@/components/widgets/CTA-1'
import CTA_2 from '@/components/widgets/CTA-2'
import Hero from '@/components/widgets/Hero'

export default function Home(props) {
    return (
        <>
            <main className="tracking-widest">
                <Hero />
                <div className="flex flex-col items-center justify-center py-16">
                    <Image
                        src="/assets/images/toptracer-logo.png"
                        alt="Smasherson Logo"
                        width={600}
                        height={600}
                        className="object-contain "
                    />
                </div>
                <section className="dark:bg-gray-900 bg-gray-300 py-24">
                    {/* <EventsSlider /> */}
                </section>
                <section className="pt-16 bg-gray-700">
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
