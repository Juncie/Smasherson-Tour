import Logo from '../Logo'

export default function Footer() {
    return (
        <>
            <footer className="bg-primary/10 md:p-8 lg:p-10">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center">
                        <Logo height={150} width={150} />
                    </a>
                    <p className="my-6  ">
                        Home of Golf&rsquo;s Non-Traditional Champions
                    </p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 ">
                        <li>
                            <a
                                href="/about"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/events"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Events
                            </a>
                        </li>
                        <li>
                            <a
                                href="/leaderboards"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Leaderboards
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2020-2023{' '}
                        <a
                            href="https://smasherson.com"
                            target="_blank"
                            className="hover:underline"
                        >
                            Smash Golf Tour™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    )
}
