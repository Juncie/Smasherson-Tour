'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import { useUserContext } from '@/context/UserContext'
import { Avatar } from 'flowbite-react'

export default function NavBar({ navLinks }) {
    const { user } = useUserContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const linkStyle =
        'block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:text-2xl text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'

    const firstName = user?.userData?.first_name
    const lastName = user?.userData?.last_name

    const fistInitial = firstName?.charAt(0) || ''
    const lastInitial = lastName?.charAt(0) || ''

    return (
        <>
            <header
                id="site-header"
                className="sticky top-0 z-30 flex items-center justify-between py-2 px-24 dark:bg-opacity-95 bg-gray-800 lg:rounded-b-md "
            >
                <div className="hidden lg:inline-block">
                    <Logo width={140} height={140} className="sm:hidden" />
                </div>
                <nav className="border-gray-200 flex justify-between px-4 tracking-wider uppercase lg:px-6 lg:order-2 sm:order-3">
                    <div className="flex flex-wrap mx-auto max-w-screen-xl">
                        <div className="flex items-center lg:order-2">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`w-6 h-6 ${
                                        isMenuOpen ? 'hidden' : ''
                                    }`}
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
                                    }`}
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
                            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`}
                            id="mobile-menu"
                        >
                            <ul className="flex flex-col mt-4 items-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {navLinks &&
                                    navLinks.map((link) => (
                                        <li key={link.id} className={linkStyle}>
                                            <Link href={link.url}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                {!user.isLoggedIn ? (
                    <div className="lg:order-3 flex gap-4 uppercase tracking-wide">
                        <Link
                            className="outline outline-2 outline-teal-400 hover:bg-opacity-50 hover:bg-teal-300 px-8 py-4 transition-all duration-150 ease-in-out"
                            href="/login"
                        >
                            Login
                        </Link>
                        <Link
                            className="outline outline-2 outline-blue-400 px-8 py-4 hover:bg-opacity-50 hover:bg-blue-300 transition-all duration-150 ease-in-out"
                            href="/register"
                        >
                            Sign Up
                        </Link>
                    </div>
                ) : (
                    <div className="lg:order-last">
                        <Avatar
                            rounded
                            size="lg"
                            placeholderInitials={`${fistInitial}${lastInitial}`}
                        />
                    </div>
                )}
            </header>
        </>
    )
}
