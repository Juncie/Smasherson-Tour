'use client'
import { useRef } from 'react'

import Logo from '@/components/shared/Logo'

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        console.log('Email:', email)
        console.log('Password:', password)

        const API_URL = `https://be.smasherson.com/api/v1/users/sign_up?email=${emailRef}&password=${passwordRef}`

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full bg-white py-8 px-16 shadow-md rounded-md "
            >
                <div className="flex items-center justify-center">
                    <Logo width={150} height={150} />
                </div>

                <h2 className="text-2xl font-bold mb-6">Log in</h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2 tracking-wider uppercase"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        className="w-full p-2 border border-gray-300 rounded-md text-black font-sans"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-semibold mb-2 uppercase tracking-wider"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                        className="w-full p-2 border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Log in
                </button>
            </form>
        </div>
    )
}

export default Login
