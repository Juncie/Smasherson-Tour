'use client'
import { useRef, useState } from 'react'

import { Balancer } from 'react-wrap-balancer'
import { FcGoogle } from 'react-icons/fc'

import Logo from '@/components/shared/Logo'

import { signInUser } from '@lib/signInUser'
import { useUserContext } from '@/context/UserContext'

export default function Login() {
    const { user, setUser } = useUserContext()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Disable the submit button while the request is being processed.
        const submitButton = e.currentTarget.querySelector(
            'button[type="submit"]'
        ) as HTMLButtonElement
        if (submitButton) {
            submitButton.disabled = true
        }

        const email = emailRef.current?.value as string
        const password = passwordRef.current?.value as string

        try {
            const res = await signInUser(email, password)
            console.log('LOGIN RESPONSE', res)

            if (!res.data.data.success) {
                setErrorMessage(res.data.data.message)
            } else if (res.data.data.success) {
                setUser({
                    userData: res.data.data.data,
                    isLogginIn: true,
                    status: 'success',
                })
                localStorage.setItem(
                    'accessToken',
                    res.data.data.data.access_token
                )
                // notify the user he is logged in
                alert('You are now logged in!' + user?.userData?.first_name)

                window.location.href = `/dashboard/${res.data.data.data.id}`
            } else {
                setErrorMessage('')
            }
        } catch (error) {
            setTimeout(() => {
                setErrorMessage('Something went wrong. Please try again.')
            }, 10000)
        } finally {
            if (submitButton) {
                submitButton.disabled = false
            }
        }
    }

    return (
        <>
            <section className="container mx-auto pt-16 flex flex-col items-center justify-center pb-16">
                <form
                    onSubmit={handleSubmit}
                    className="bg-slate-100 py-16 px-32 shadow-md rounded-md max-w-xl lg:min-w-[40vw]"
                >
                    <div className="flex items-center justify-center pb-8">
                        <Logo width={150} height={150} />
                    </div>

                    <div className="container mx-auto text-black uppercase text-3xl pb-16">
                        <h1 className="uppercase text-center">
                            <Balancer>Welcome Back!</Balancer>
                        </h1>
                        <p className="text-center text-gray-500 text-sm mt-4">
                            Don't have an account?{' '}
                            <a
                                href="/register"
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Sign up
                            </a>
                        </p>
                    </div>

                    <div className="container mx-auto pb-4">
                        {errorMessage && (
                            <p className="text-center text-lg text-red-500">
                                {errorMessage}
                            </p>
                        )}
                    </div>

                    <div className="mb-4 w-full">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2 tracking-wider uppercase "
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
                            <div className="flex flex-row">
                                <div>Password</div>
                                <div className="ml-auto">
                                    <a
                                        href="/forgot-password"
                                        className="text-blue-500 hover:text-blue-600 text-sm uppercase tracking-wider font-normal"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-gray-50 py-2 px-4 rounded-md hover:bg-blue-600 uppercase tracking-widest transition duration-150 ease-in-out"
                        >
                            Log in
                        </button>

                        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base w-full">
                            <svg
                                className="h-5 w-5 shrink-0"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                                    fill="#EA4335"
                                />
                            </svg>
                            <span className="tracking-wide font-sans">
                                Continue with Google
                            </span>
                        </button>
                    </div>
                </form>
                <div>
                    <div className="pt-4">
                        <p className="text-center text-gray-500 text-sm mt-4">
                            Forgot your password?{' '}
                            <a
                                href="/forgot-password"
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Reset Password
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
