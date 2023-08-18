'use client'

import { Balancer } from 'react-wrap-balancer'

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
                            <section class="text-gray-400 bg-gray-900 body-font col-span-4 px-16">
                                <div class="container px-5 py-24 mx-auto">
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
                                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                                        <div class="p-4 md:w-1/3 flex">
                                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="text-white text-lg title-font font-medium mb-2">
                                                    Too Time Consuming
                                                </h2>
                                                <p class="leading-relaxed text-base">
                                                    Blue bottle crucifix vinyl
                                                    post-ironic four dollar
                                                    toast vegan taxidermy.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-1/3 flex">
                                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-6 h-6"
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
                                            <div class="flex-grow pl-6">
                                                <h2 class="text-white text-lg title-font font-medium mb-2">
                                                    Too Expensive
                                                </h2>
                                                <p class="leading-relaxed text-base">
                                                    Blue bottle crucifix vinyl
                                                    post-ironic four dollar
                                                    toast vegan taxidermy.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-1/3 flex">
                                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-6 h-6"
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
                                            <div class="flex-grow pl-6">
                                                <h2 class="text-white text-lg title-font font-medium mb-2">
                                                    Too Difficult to Compete
                                                </h2>
                                                <p class="leading-relaxed text-base">
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

                                <div class="container mx-auto flex flex-wrap">
                                    <div class="flex flex-wrap w-full">
                                        <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                            <div class="flex relative pb-12">
                                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        class="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    </svg>
                                                </div>
                                                <div class="flex-grow pl-4">
                                                    <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 1
                                                    </h2>
                                                    <p class="leading-relaxed">
                                                        VHS cornhole pop-up,
                                                        try-hard 8-bit iceland
                                                        helvetica. Kinfolk
                                                        bespoke try-hard cliche
                                                        palo santo offal.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex relative pb-12">
                                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        class="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <div class="flex-grow pl-4">
                                                    <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 2
                                                    </h2>
                                                    <p class="leading-relaxed">
                                                        Vice migas literally
                                                        kitsch +1 pok pok.
                                                        Truffaut hot chicken
                                                        slow-carb health goth,
                                                        vape typewriter.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex relative pb-12">
                                                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                    <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                                </div>
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        class="w-5 h-5"
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
                                                <div class="flex-grow pl-4">
                                                    <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 3
                                                    </h2>
                                                    <p class="leading-relaxed">
                                                        Coloring book nar whal
                                                        glossier master cleanse
                                                        umami. Salvia +1 master
                                                        cleanse blog taiyaki.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex relative pb-12">
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        class="w-5 h-5"
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
                                                <div class="flex-grow pl-4">
                                                    <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                                        STEP 4
                                                    </h2>
                                                    <p class="leading-relaxed">
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
                                            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                                            src="https://dummyimage.com/1200x500"
                                            alt="step"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
