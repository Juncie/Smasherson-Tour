import Image from 'next/image'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

interface HeroProps {
    title: string
    subtitle: string
    image?: string
    image2?: string
    buttonTitle?: string
    buttonURL?: string
    buttonTitle2?: string
    buttonURL2?: string
    className?: string
    titleClass?: string
    subtitleClass?: string
    imgSrc?: string
}

export default function Hero(props: HeroProps) {
    return (
        <>
            <div className="flex h-full items-center justify-center bg-[url('../public/assets/images/hero-bg.png')] bg-cover bg-center">
                <div className="flex flex-col py-8 justify-center items-center ">
                    <div className="-mt-14">
                        <Image
                            src={
                                props.imgSrc || '/assets/images/hero-image.png'
                            }
                            width={1000}
                            height={1000}
                            alt="Smash Golf Tour"
                        />
                    </div>

                    <div id="row-2" className="z-20 -mt-[6rem]">
                        <div id="wrapper">
                            <h1>
                                <section className="flex flex-col justify-center items-center space-y-4">
                                    <div className="flex items-center justify-center uppercase tracking-wider lg:text-8xl md:text-6xl sm:text-4xl text-white">
                                        <strong className="">
                                            <Balancer>{props.title}</Balancer>
                                        </strong>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <span className="uppercase bg-blue lg:text-7xl md:text-5xl xs:text-5xl text-gray-900 bg-blue-500 px-[8rem] py-6 rounded-tl-3xl rounded-br-3xl">
                                            <Balancer>
                                                {props.subtitle}
                                            </Balancer>
                                        </span>
                                    </div>
                                </section>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
