'use client'

import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Russo_One } from 'next/font/google'

import NavBar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { navLinks } from '@/components/shared/Navbar/data.navbar'
import { UserContextProvider } from '@/context/UserContext'

import { useUserContext } from '@/context/UserContext'

const russo = Russo_One({
    subsets: ['latin'],
    weight: ['400'],
})

export default function RootLayout({ children }) {
    const { user } = useUserContext()
    return (
        <html lang="en">
            <body className={`${russo.className} bg-gray-950`}>
                <UserContextProvider>
                    <ThemeProvider attribute="class">
                        <NavBar navLinks={navLinks} />
                        <section>
                            {user?.userData?.first_name && (
                                <div className="flex flex-col items-center justify-center py-16">
                                    <h1 className="text-4xl text-white">
                                        Welcome, {user?.userData?.first_name}!
                                    </h1>
                                </div>
                            )}

                            {children}
                        </section>
                        <Footer />
                    </ThemeProvider>
                </UserContextProvider>
            </body>
        </html>
    )
}
