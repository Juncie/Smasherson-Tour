'use client'
import Image from 'next/image'
import { useState } from 'react'

const Carousel = () => {
    const images = [
        'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600',
        'https://source.unsplash.com/random/',
        'https://source.unsplash.com/random/',
        'https://source.unsplash.com/random/',
        'https://source.unsplash.com/random/',
    ]
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClickIndicator = (index) => {
        setActiveIndex(index)
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        )
    }

    return (
        <div className="relative w-full h-[720px] sm:w-2/3 md:w-3/5 lg:min-w-[1440px] mx-auto">
            <div className="">
                <div className="flex flex-row">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Carousel Image ${index}`}
                            width={1412}
                            height={720}
                            className={`absolute w-full h-full object-cover transition-opacity ${
                                index === activeIndex
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
                <div className="flex">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handleClickIndicator(index)}
                            className={`w-3 h-3 rounded-full bg-white mx-1 cursor-pointer ${
                                index === activeIndex
                                    ? 'opacity-100'
                                    : 'opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 -translate-y-1/2 -left-5 bg-gray-800 p-2 rounded-full text-gray-600 shadow-md hover:bg-gray-200 focus:outline-none"
                onClick={handlePrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute top-1/2 -translate-y-1/2 -right-5 bg-gray-800 p-2 rounded-full text-gray-600 shadow-md hover:bg-gray-200 focus:outline-none"
                onClick={handleNext}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Carousel
