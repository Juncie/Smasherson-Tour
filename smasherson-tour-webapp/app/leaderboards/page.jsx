'use client'
import { Avatar } from 'flowbite-react'
import React, { useState } from 'react'
import styles from './leaderboards.module.css'
import Logo from '@/components/shared/Logo'
function generateTestCases() {
    const testCases = []

    for (let i = 1; i <= 100; i++) {
        const testCase = {
            rank: i,
            name: `Player ${i}`,
            score: Math.floor(Math.random() * 1000),
            cashEarned: Math.floor(Math.random() * 1000),
        }

        testCases.push(testCase)
    }

    return testCases
}

const placeholderData = generateTestCases()

const Leaderboard = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const totalPages = Math.ceil(placeholderData.length / itemsPerPage)
    const paginatedData = placeholderData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div
            className={` flex flex-col items-center mx-24 bg-opacity-10 relative`}
        >
            <h1 className="text-4xl font-bold mb-4 uppercase tracking-wide">
                Smash Tour Leaderboard
            </h1>
            <Logo className="absolute -z-50" />

            <table className="min-w-full divide-y divide-gray-200 overflow-auto h-40">
                <thead>
                    <tr>
                        <th className="px-6 py-8 bg-[#0082B5] text-left text-xl leading-4 font-bold text-white uppercase tracking-wider">
                            Rank
                        </th>
                        <th className="px-6 py-8 bg-[#0082B5] text-left text-xl leading-4 font-bold text-white uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-8 bg-[#0082B5] text-left text-xl leading-4 font-bold text-white uppercase tracking-wider">
                            Score
                        </th>
                        <th className="px-6 py-8 bg-[#0082B5] text-left text-xl leading-4 font-bold text-white uppercase tracking-wider rounded-tr-3xl">
                            Smash Cash Earned
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((participant, index) => (
                        <tr
                            key={participant.rank}
                            className={
                                index % 2 === 0
                                    ? 'bg-gray-100 dark:bg-gray-800 bg-opacity-75'
                                    : ''
                            }
                        >
                            <td className="px-6 py-4 whitespace-no-wrap">
                                {participant.rank}
                            </td>
                            <td className="px-6 py-4 flex gap-4 items-center">
                                <Avatar placeholder rounded />
                                {participant.name}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                {participant.score}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                {participant.cashEarned}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-2 rounded-md ${
                            currentPage === index + 1
                                ? 'bg-gray-700 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard
