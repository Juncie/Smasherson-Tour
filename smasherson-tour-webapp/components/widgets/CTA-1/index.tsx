import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

export default function CTA_1() {
    return (
        <div className="flex container mx-auto">
            <div className="basis-1/2 space-y-4">
                <section className="uppercase w-full">
                    <span className="text-3xl pb-2">
                        <Balancer>Home of the non-traditional</Balancer>
                    </span>
                    <br />
                    <span className="text-6xl tracking-wider text-[#ffa500]">
                        <Balancer>Golf Champion</Balancer>
                    </span>
                </section>
                <p className="space-y-8">
                    <Balancer className="max-w-lg">
                        Use your own clubs, real balls, outdoor ranges, and
                        Toptracer technology via the Smashers ON App.
                    </Balancer>
                    <br />
                    <Balancer className="max-w-lg min-w-lg">
                        Say goodbye to the traditional golf course and hello to
                        the future of golf.
                    </Balancer>
                </p>
                <div className="pt-8">
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
