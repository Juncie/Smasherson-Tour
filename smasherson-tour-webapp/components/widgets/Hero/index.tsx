import Image from 'next/image'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

export default function Hero() {
    return (
        <>
            <div className="flex h-full items-center justify-center bg-[url('../public/assets/images/hero-bg.png')] bg-cover bg-center">
                <div className="flex flex-col py-8 justify-center items-center ">
                    <div className="-mt-14">
                        <Image
                            src="/assets/images/hero-image.png"
                            width={1000}
                            height={1000}
                            alt="Smash Golf Tour"
                        />
                    </div>

                    <div id="row-2" className="z-20 -mt-[6rem]">
                        <div id="wrapper">
                            <h1>
                                <Balancer className="flex flex-col justify-center items-center space-y-4">
                                    <div className="flex items-center justify-center uppercase tracking-wider text-7xl">
                                        <strong>Smash Golf Tour</strong>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <span className="uppercase bg-blue text-6xl text-gray-900 bg-blue-500 px-16 py-6 rounded-tl-3xl rounded-br-3xl">
                                            Play. Compete. Win.
                                        </span>
                                    </div>
                                </Balancer>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
