import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'

export default function CTA_2() {
    return (
        <div className="flex lg:flex-row-reverse sm:flex-col-reverse sm:items-center sm:justify-centers gap-8">
            <div className="basis-2/3">
                <h3>
                    <Balancer className="uppercase w-full">
                        <span className="lg:text-3xl md:text-2xl sm:text-xl">
                            Earn Smash Cash for the
                        </span>
                        <br />
                        <span className="lg:text-[64px] md:text-[48px] sm:text-[32px] tracking-wider text-blue-600">
                            Smash Store
                        </span>
                    </Balancer>
                </h3>
                <p>
                    <Balancer className="font-sans">
                        Use your own clubs, real balls, outdoor ranges, and
                        Toptracer technology via the Smashers ON App.
                    </Balancer>
                </p>
                <br />
                <p>
                    <Balancer className="lg:max-w-md font-sans">
                        Say goodbye to traditional golf hassles and hello to
                        elevate your game!
                    </Balancer>
                </p>

                <div className="pt-16">
                    <Link
                        href="/about"
                        className="py-4 px-8 uppercase bg-blue-600 hover:bg-blue-700 rounded-md inline-flex items-center justify-center transition duration-150"
                    >
                        <span className="text-2xl">Visit the Smash Store</span>
                    </Link>
                </div>
            </div>
            <div className="">
                <Image
                    src="/assets/images/hero-image.png"
                    width={1000}
                    height={1000}
                    alt="Smash Golf Tour"
                ></Image>
            </div>
        </div>
    )
}
