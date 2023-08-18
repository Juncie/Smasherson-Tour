import React from 'react'
import PageHeader from '@/components/shared/PageHeader'

export default function ContactPage() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 relative">
                <div className="absolute inset-0 bg-gray-900">
                    <iframe
                        title="map"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.8510824494524!2d-111.88086742380271!3d33.374953653188456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0793a80b2c37%3A0x4768889ffb9170c!2sDobson%20Ranch%20Golf%20Course!5e0!3m2!1sen!2sus!4v1692215280451!5m2!1sen!2sus"
                        className=""
                    ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">
                            Have Questions, or Just Want To Say Hi?
                        </h2>
                        <p className="leading-relaxed mb-5">
                            Leave us a message! We'd love to hear from you.
                        </p>
                        <div className="relative mb-4">
                            <label
                                for="email"
                                className="leading-7 text-sm text-gray-400"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                for="message"
                                className="leading-7 text-sm text-gray-400"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                            Submit
                        </button>
                        <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled
                            brook viral artisan.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
