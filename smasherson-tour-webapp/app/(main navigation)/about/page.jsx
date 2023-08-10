'use client'

import { Balancer } from 'react-wrap-balancer'

export default function AboutPage(props) {
    return (
        <>
            <main className="tracking-widest">
                <div class="py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div>
                                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                                        loading="lazy"
                                        alt="Photo by Martin Sanchez"
                                        class="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            <div class="md:pt-8">
                                <p class="text-center font-bold text-indigo-500 md:text-left">
                                    Who we are
                                </p>

                                <h2 class="mb-4 md:mb-6 uppercase md:text-4xlxl">
                                    <Balancer className="text-center font-bold text-gray-400 sm:text-3xl md:text-left">
                                        We are the home of the Non-Traditional
                                        Champion
                                    </Balancer>
                                </h2>

                                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                    This is a section of some simple filler
                                    text, also known as placeholder text. It
                                    shares some characteristics of a real
                                    written text but is random or otherwise
                                    generated. It may be used to display a
                                    sample of fonts or generate text for
                                    testing. Filler text is dummy text which has
                                    no meaning however looks very similar to
                                    real text.
                                    <br />
                                    <br />
                                    This is a section of some simple filler
                                    text, also known as placeholder text. It
                                    shares some characteristics of a real
                                    written text but is{' '}
                                    <a
                                        href="#"
                                        class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                    >
                                        random
                                    </a>{' '}
                                    or otherwise generated. It may be used to
                                    display a sample of fonts or generate text
                                    for testing. Filler text is dummy text which
                                    has no meaning however looks very similar to
                                    real text.
                                </p>

                                <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                                    About us
                                </h2>

                                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                    This is a section of some simple filler
                                    text, also known as placeholder text. It
                                    shares some characteristics of a real
                                    written text but is random or otherwise
                                    generated. It may be used to display a
                                    sample of fonts or generate text for
                                    testing. Filler text is dummy text which has
                                    no meaning however looks very similar to
                                    real text.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
