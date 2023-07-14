import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

export default function CTA_1() {
    return (
        <div className="flex">
            <div className="basis-2/3 space-y-4">
                <Balancer className="uppercase w-full">
                    <span className="text-3xl">
                        Home of the non traditional
                    </span>
                    <br />
                    <span className="text-6xl tracking-wider text-[#ffa500]">
                        Golf Champion
                    </span>
                </Balancer>
                <p>
                    <Balancer className="space-y-8">
                        Use your own clubs, real balls, outdoor ranges, and
                        Toptracer technology via the Smashers ON App.
                    </Balancer>
                </p>
                <p>
                    <Balancer>
                        Say goodbye to traditional golf hassles and hello to
                        elevate your game!
                    </Balancer>
                </p>

                <div className="pt-16">
                    <Link
                        href="/about"
                        className="py-4 px-8 uppercase bg-[#ffa500] hover:bg-opacity-90 rounded-md inline-flex items-center justify-center transition duration-150"
                    >
                        <span className="text-2xl">Get Started</span>
                    </Link>
                </div>
            </div>
            <div className="">
                <Image
                    src="/assets/images/kid-golfer.png"
                    width={400}
                    height={400}
                    alt="Smash Golf Tour"
                ></Image>
            </div>
        </div>
    )
}
