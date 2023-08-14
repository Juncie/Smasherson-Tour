'use client'
import { useRef, useState } from 'react'

import { Balancer } from 'react-wrap-balancer'
import { FcGoogle } from 'react-icons/fc'

import Logo from '@/components/shared/Logo'

import { signInUser } from '@lib/signInUser'
import { useUserContext } from '@/context/UserContext'

import { toast } from 'react-toastify'
import { Alert } from 'flowbite-react'

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

            if (!res.data.data.success) {
                setErrorMessage(res.data.data.message)
            } else if (res.data.data.success) {
                setUser({
                    userData: res.data.data,
                    isLogginIn: true,
                    status: 'success',
                })
                localStorage.setItem(
                    'accessToken',
                    res.data.data.data.access_token
                )
                // notify the user he is logged in
                // toast.success('You are now logged in', {
                //     position: 'bottom-right',
                //     autoClose: 2000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // })
                Alert({
                    title: 'You are now logged in',
                })

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

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-gray-50 py-2 px-4 rounded-md hover:bg-blue-600 uppercase tracking-widest transition duration-150 ease-in-out"
                    >
                        Log in
                    </button>
                </form>
                <div>
                    <div className="pt-4">
                        <button className="outline outline-1 outline-gray-300 p-2 rounded-full bg-white">
                            <FcGoogle size={32} />
                        </button>
                    </div>
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
