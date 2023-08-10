'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Russo_One } from 'next/font/google'

import NavBar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { navLinks } from '@/components/shared/Navbar/data.navbar'
import { UserContextProvider } from '@/context/UserContext'

import { user } from '@/context/UserContext'

const russo = Russo_One({
    subsets: ['latin'],
    weight: ['400'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${russo.className} bg-gray-950`}>
                <UserContextProvider>
                    <ThemeProvider attribute="class">
                        <NavBar navLinks={navLinks} />
                        <section>{children}</section>
                        <Footer />
                    </ThemeProvider>
                </UserContextProvider>
            </body>
        </html>
    )
}
