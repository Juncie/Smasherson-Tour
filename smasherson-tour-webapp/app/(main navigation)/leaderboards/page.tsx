'use client'
import React, { useState, useEffect } from 'react'

import LeaderboardTable from '@/components/widgets/LeaderboardTable'

const generateTestCases = () => {
    let testCases = [],
        testCase = {}

    for (let i = 1; i <= 100; i++) {
        testCase = {
            rank: i,
            name: `Player ${i}`,
            score: Math.floor(Math.random() * 1000),
            cashEarned: Math.floor(Math.random() * 1000),
        }

        testCases.push(testCase)
    }

    return testCases
}

const TABS = [
    {
        name: 'Clostest to the Pin',
        players: [],
    },
    {
        name: 'Longest Drive',
        players: [],
    },
    {
        name: 'Event 3',
        players: [],
    },
]

export default function Leaderboard() {
    const [tabName, setTabName] = useState<string>(TABS[0].name)
    return (
        <>
            <main className="container mx-auto flex flex-col justify-center">
                <div className="pt-16 pb-6">
                    <ul className="flex gap-4">
                        {TABS.map((tab, i) => {
                            return (
                                <li
                                    className={`${
                                        tabName === tab.name
                                            ? 'outline-sky-200'
                                            : ''
                                    } px-4 py-2 hover:bg-gray-100/25 transition duration-150 rounded-sm`}
                                >
                                    <button
                                        onClick={() => setTabName(tab.name)}
                                    >
                                        {tab.name}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <LeaderboardTable data={generateTestCases()} title={tabName} />
            </main>
        </>
    )
}
