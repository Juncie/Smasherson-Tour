import Image from 'next/image'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

export default function Hero() {
    return (
        <>
            <div className="flex h-full outline items-center justify-center bg-[url('../public/assets/images/hero-bg.png')] bg-cover bg-center">
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
                            <Balancer className="">
                                <h1 className="uppercase tracking-wider text-7xl flex flex-col gap-2 justify-center items-center">
                                    <strong>Smash Golf Tour</strong>

                                    <span className="bg-blue text-6xl text-gray-900 bg-blue-500 px-16 py-6 rounded-tl-3xl rounded-br-3xl">
                                        Play. Complete. Win.
                                    </span>
                                </h1>
                            </Balancer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
