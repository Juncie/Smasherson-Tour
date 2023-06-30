import Image from 'next/image'
import React from 'react'

export interface SlideType {
    id: number
    imageURL: string
    slideTitle: string
    slideSubtitle: string
    slideAction1?: string
    slideAction1URL?: string
    slideAction2?: string
    slideAction2URL?: string
    slug?: string
}

export default function Slide({
    imageURL,
    slideTitle,
    slideSubtitle,
    slideAction1,
    slideAction1URL,
    slideAction2,
    slideAction2URL,
    slug,
}) {
    return (
        <>
            <div className="relative flex w-full justify-center items-center">
                <Image
                    src={imageURL}
                    alt={slideTitle}
                    width={1200}
                    height={750}
                    className="object-cover w-full max-h-[750px]"
                />
                <div className="absolute top-0 left-0 p-4 gap-4 text-white flex items-center justify-center w-full h-full flex-col">
                    <h2 className="text-6xl font-semibold">
                        {/* {slideTitle} */}
                    </h2>
                    <p className="text-lg">{slideSubtitle}</p>
                    {slideAction1 && (
                        <a
                            href={slideAction1URL}
                            className="text-blue-500 underline"
                        >
                            {slideAction1}
                        </a>
                    )}
                    {slideAction2 && (
                        <a
                            href={slideAction2URL}
                            className="text-blue-500 underline"
                        >
                            {slideAction2}
                        </a>
                    )}
                    {slug && (
                        <a
                            href={`/${slug}`}
                            className="text-blue-500 underline"
                        >
                            Read More
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}
