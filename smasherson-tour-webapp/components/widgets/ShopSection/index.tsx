import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

export default function ShopSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full container mx-auto space-y-16">
            <h2 className="text-5xl pt-16 uppercase">
                <Balancer>Shop Exclusive Golf Brands</Balancer>
            </h2>

            <div className="h-scroll w-full flex flex-row gap-x-24">
                <Image
                    src="/assets/logos/good-good.png"
                    width={100}
                    height={100}
                    alt="good good"
                />
                <Image
                    src="/assets/logos/callaway.png"
                    width={100}
                    height={100}
                    alt="callaway"
                />
                <Image
                    src="/assets/logos/bad-birdie.png"
                    width={100}
                    height={100}
                    alt="Bad Birdie"
                />
                <Image
                    src="/assets/logos/travis.png"
                    width={100}
                    height={100}
                    alt="Travis Matthews"
                />
                <Image
                    src="/assets/logos/adidas.png"
                    width={100}
                    height={100}
                    alt="Travis Matthews"
                />
            </div>
            <div className="w-full flex flex-row items-center justify-center">
                <Link
                    href="#"
                    className="py-4 px-8 inline-block uppercase my-16 outline outline-gray-800 hover:bg-white/10 transition-all duration-150 ease-in-out"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    )
}
