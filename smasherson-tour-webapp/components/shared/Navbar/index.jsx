'use client'
import { useState } from 'react' // Import the useState hook
import ThemeButton from '../ThemeButton'
import Link from 'next/link'
import Logo from '../Logo'
import { navLinks, socialLinks } from './data.navbar'

export default function NavBar({ items: { navItems, socialItems } }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Add state variables

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const linkStyle =
        'block text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:text-2xl dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'

    return (
        <>  
            <header className="sticky top-0 z-30 flex items-center justify-between py-2 px-24 dark:bg-opacity-95 bg-white dark:bg-gray-800 lg:rounded-b-md">
                    <Logo width={110} height={110} />
                    <nav className="border-gray-200 flex justify-between px-4 tracking-wider uppercase lg:px-6 lg:order-2 sm:order-3">
                        <div className="flex flex-wrap mx-auto max-w-screen-xl">
                            <div className="flex items-center lg:order-2">
                                <button
                                    onClick={toggleMenu} // Add onClick handler
                                    type="button"
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded={isMenuOpen} // Set aria-expanded attribute
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className={`w-6 h-6 ${
                                            isMenuOpen ? 'hidden' : ''
                                        }`} // Add conditional class
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <svg
                                        className={`w-6 h-6 ${
                                            isMenuOpen ? '' : 'hidden'
                                        }`} // Add conditional class
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={`${
                                    isMenuOpen ? 'flex' : 'hidden'
                                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`} // Add transition classes
                                id="mobile-menu"
                            >
                                <ul className="flex flex-col mt-4 items-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    {navItems &&
                                        navItems.map((link) => (
                                            <li
                                                key={link.id}
                                                className={linkStyle}
                                            >
                                                <Link href={link.url}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="lg:order-3 sm:order-2">
                        <ThemeButton />
                    </div>
                </header>
            </>
    )
}

NavBar.defaultProps = {
    items: {
        navItems: navLinks,
        socialItems: socialLinks,
    },
}