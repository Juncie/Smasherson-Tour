'use client'

import { Balancer } from 'react-wrap-balancer'
import FAQs from '@/components/widgets/FAQs'

export default function AboutPage(props) {
    return (
        <>
            <main className="tracking-widest">
                <div className="py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
                            <div className="col-span-2">
                                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=600"
                                        loading="lazy"
                                        alt="Photo by Martin Sanchez"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            <div className="md:pt-8 col-span-2">
                                <p className="text-center text-primary md:text-left">
                                    Who Are We?
                                </p>

                                <h2 className="mb-4 md:mb-6 uppercase md:text-4xlxl">
                                    <Balancer className="text-center text-gray-400 sm:text-3xl md:text-left">
                                        We are the home of the Non-Traditional
                                        Champion
                                    </Balancer>
                                </h2>

                                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                    <Balancer>
                                        This is a section of some simple filler
                                        text, also known as placeholder text. It
                                        shares some characteristics of a real
                                        written text but is random or otherwise
                                        generated. It may be used to display a
                                        sample of fonts or generate text for
                                        testing. Filler text is dummy text which
                                        has no meaning however looks very
                                        similar to real text.
                                    </Balancer>
                                    <br />
                                    <br />
                                    <Balancer>
                                        This is a section of some simple filler
                                        text, also known as placeholder text. It
                                        shares some characteristics of a real
                                        written text but is{' '}
                                    </Balancer>
                                    <a
                                        href="#"
                                        className="text-primary underline transition duration-100 hover:text-primary/70 active:text-indigo-700"
                                    >
                                        random
                                    </a>{' '}
                                    <Balancer>
                                        or otherwise generated. It may be used
                                        to display a sample of fonts or generate
                                        text for testing. Filler text is dummy
                                        text which has no meaning however looks
                                        very similar to real text.
                                    </Balancer>
                                </p>
                            </div>
                            <section className="text-gray-400 bg-gray-900 body-font col-span-4 px-16">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20 justify-center items-center">
                                        <h2 className="text-md text-primary tracking-widest font-medium title-font mb-1">
                                            <Balancer>
                                                The Problem with Traditional
                                                Golf
                                            </Balancer>
                                        </h2>
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 uppercase">
                                            <Balancer>
                                                Why we created the Smash Golf
                                                Tour
                                            </Balancer>
                                        </h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
                                            <Balancer>
                                                Whatever cardigan tote bag
                                                tumblr hexagon brooklyn
                                                asymmetrical gentrify, subway
                                                tile poke farm-to-table.
                                            </Balancer>
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                                        <div className="p-4 md:w-1/3 flex">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className="text-white text-lg title-font font-medium mb-2">
                                                    Too Time Consuming
                                                </h2>
                                                <p className="leading-relaxed text-base">
                                                    Blue bottle crucifix vinyl
                                                    post-ironic four dollar
                                                    toast vegan taxidermy.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3 flex">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        cx="6"
                                                        cy="6"
                                                        r="3"
                                                    ></circle>
                                                    <circle
                                                        cx="6"
                                                        cy="18"
                                                        r="3"
                                                    ></circle>
                                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className="text-white text-lg title-font font-medium mb-2">
                                                    Too Expensive
                                                </h2>
                                                <p className="leading-relaxed text-base">
                                                    Blue bottle crucifix vinyl
                                                    post-ironic four dollar
                                                    toast vegan taxidermy.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3 flex">
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                    ></circle>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-6">
                                                <h2 className="text-white text-lg title-font font-medium mb-2">
                                                    Too Difficult to Compete
                                                </h2>
                                                <p className="leading-relaxed text-base">
                                                    Blue bottle crucifix vinyl
                                                    post-ironic four dollar
                                                    toast vegan taxidermy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="col-span-4 py-24 px-5">
                                <div className="">
                                    <div className="flex flex-col text-center w-full mb-20 justify-center items-center">
                                        <h2 className="text-md text-primary tracking-widest font-medium title-font mb-1">
                                            <Balancer>How to Play</Balancer>
                                        </h2>
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 uppercase">
                                            <Balancer>
                                                Get Started with the Smash Golf
                                                Tour
                                            </Balancer>
                                        </h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
                                            <Balancer>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Molestias, deserunt! Maxime at
                                                cum quasi aliquid reprehenderit
                                                iure, quis quaerat nesciunt
                                                incidunt dolorum perspiciatis
                                                quisquam?
                                            </Balancer>
                                        </p>
                                    </div>
                                </div>

                                <div className="container mx-auto flex flex-wrap">
                                    <div className="flex flex-wrap w-full">
                                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 1
                                                    </h2>
                                                    <p className="leading-relaxed">
                                                        <Balancer>
                                                            <a
                                                                href="#"
                                                                className="underline text-primary"
                                                            >
                                                                Download the
                                                                Smasherson App
                                                            </a>
                                                        </Balancer>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 2
                                                    </h2>
                                                    <p className="leading-relaxed">
                                                        Vice migas literally
                                                        kitsch +1 pok pok.
                                                        Truffaut hot chicken
                                                        slow-carb health goth,
                                                        vape typewriter.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex relative pb-12">
                                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="5"
                                                            r="3"
                                                        ></circle>
                                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 3
                                                    </h2>
                                                    <p className="leading-relaxed">
                                                        Coloring book nar whal
                                                        glossier master cleanse
                                                        umami. Salvia +1 master
                                                        cleanse blog taiyaki.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex relative pb-12">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                        <circle
                                                            cx="12"
                                                            cy="7"
                                                            r="4"
                                                        ></circle>
                                                    </svg>
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 4
                                                    </h2>
                                                    <p className="leading-relaxed">
                                                        VHS cornhole pop-up,
                                                        try-hard 8-bit iceland
                                                        helvetica. Kinfolk
                                                        bespoke try-hard cliche
                                                        palo santo offal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                                            src="https://dummyimage.com/1200x500"
                                            alt="step"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="col-span-4">
                                <div className="container px-16 py-24 mx-auto flex items-center md:flex-row flex-col bg-blue-950 rounded-md">
                                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                                        <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
                                            <Balancer>
                                                Download the App
                                            </Balancer>
                                        </h2>
                                        <h2 className="md:text-3xl text-2xl font-medium title-font">
                                            <Balancer>
                                                Get Started with the Smash Golf
                                                Tour
                                            </Balancer>
                                        </h2>
                                    </div>
                                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.smashers.in&pcampaignid=web_share"
                                            target="_blank"
                                            className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none transition duration-150"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">
                                                    GET IT ON
                                                </span>
                                                <span className="title-font font-medium">
                                                    Google Play
                                                </span>
                                            </span>
                                        </a>
                                        <a
                                            href="https://apps.apple.com/us/app/smashers-on/id1641226286"
                                            target="_blank"
                                            className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                                viewBox="0 0 305 305"
                                            >
                                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">
                                                    Download on the
                                                </span>
                                                <span className="title-font font-medium">
                                                    App Store
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </section>

                            <section className="col-span-4">
                                <FAQs />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
