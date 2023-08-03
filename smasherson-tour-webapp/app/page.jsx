'use client'
import Image from 'next/image'

import CTA_1 from '@/components/widgets/CTA-1'
import CTA_2 from '@/components/widgets/CTA-2'
import Hero from '@/components/widgets/Hero'
import EventsSlider from '@/components/widgets/EventsSlider'
import Link from 'next/link'
import AboutSection from '@/components/widgets/AboutSection/page'
export default function Home() {
    return (
        <>
            <main className="tracking-widest">
                <Hero
                    title="Smash Golf Tour"
                    subtitle="Play. Compete. Win."
                    imgSrc="/assets/images/hero-image.png"
                />

                <div className="flex flex-col items-center justify-center py-16 bg-gray-400 dark:bg-gray-950">
                    <Image
                        src="/assets/images/toptracer-logo.png"
                        alt="Smasherson Logo"
                        width={600}
                        height={600}
                        className="object-contain "
                    />
                </div>

                <section>
                    <div className="container mx-auto">
                        <AboutSection />
                    </div>
                </section>

                <section className="dark:bg-gray-900 py-24">
                    <EventsSlider />
                </section>

                <section className="pt-16">
                    <div className="container mx-auto">
                        <CTA_1 />
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto">
                        <CTA_2 />
                    </div>
                </section>

                <section className="bg-gray-900 flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center w-full container mx-auto space-y-16">
                        <h2 className="text-5xl pt-16 uppercase">
                            Shop Exclusive Golf Brands
                        </h2>

                        <div className="h-scroll w-full flex flex-row gap-x-24">
                            <Image
                                src="/assets/images/golf-shirt.webp"
                                width={250}
                                height={250}
                                alt=""
                            />
                            <Image
                                src="/assets/images/golf-shirt.webp"
                                width={250}
                                height={250}
                                alt=""
                            />
                            <Image
                                src="/assets/images/golf-shirt.webp"
                                width={250}
                                height={250}
                                alt=""
                            />
                            <Image
                                src="/assets/images/golf-shirt.webp"
                                width={250}
                                height={250}
                                alt=""
                            />
                        </div>
                        <div className="w-full flex flex-row items-center justify-center">
                            <Link
                                href="#"
                                className="py-4 px-8 inline-block uppercase my-16 outline outline-gray-800"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
