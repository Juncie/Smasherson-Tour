'use client'
import React from 'react'

import { signOutUser } from '@/lib/signOutUser'

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between bg-[#0180b1]/40 text-white h-full w-48 ">
            {/* Sidebar Content */}
            <div className="py-4 px-2">
                <h2 className="text-2xl mb-4">Dashboard</h2>
                <ul className="space-y-2">
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#" className="block">
                            Upcoming Events
                        </a>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#" className="block">
                            Scores
                        </a>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#" className="block">
                            Home
                        </a>
                    </li>
                </ul>
            </div>

            {/* Sidebar Footer */}
            <div className="py-2 px-2 border-t border-gray-700">
                <button className="text-xs" onClick={signOutUser}>
                    Logout
                </button>
            </div>
        </div>
    )
}
