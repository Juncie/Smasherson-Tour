'use client'
import Image from 'next/image'
import CarouselSlider from '@/components/widgets/Carousel'

export default function Home(props) {
    return (
        <>
            <main className="tracking-widest space-y-16">
                <CarouselSlider />
                <div className="container mx-auto">
                    <div className="flex flex-col py-8 justify-center items-center outline bg-[url('../public/assets/images/hero-bg.png')] bg-cover bg-center">
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
                                    <span className="bg-blue text-6xl text-gray-900 bg-blue-500 px-16 zzz py-2 rounded-tl-2xl rounded-br-2xl">
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
