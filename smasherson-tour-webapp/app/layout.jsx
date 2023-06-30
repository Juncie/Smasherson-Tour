'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import localFont from 'next/font/local'
import { Bayon } from 'next/font/google'

import customFont from '@/public/assets/fonts/bignoodletitling/big_noodle_titling.ttf'
import NavBar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const bayon = Bayon({
    subsets: ['latin'],
    weight: '400',
})
const bignoodle = localFont({
    src: '../public/assets/fonts/bignoodletitling/big_noodle_titling.ttf',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${bayon.className}`}>
                <ThemeProvider attribute="class">
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
