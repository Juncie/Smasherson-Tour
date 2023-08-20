import SectionHeader from '@/components/shared/SectionHeader'
import { Tab } from '@mui/material'
import React, { useState, useEffect } from 'react'

type LeaderboardItem = {
    rank: number
    name: string
    score: number
    earnings: number
}

interface LeaderboardTableProps {
    data: LeaderboardItem[]
    title?: string
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
    data = [],
    title = '',
}) => {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardItem[]>(
        []
    )

    useEffect(() => {
        setLeaderboardData(data)
    }, [data])

    return (
        <div className="container mx-auto">
            <SectionHeader
                title={title}
                titleSize="4xl"
                titleClass="tracking-wider uppercase"
                className="text-center"
            />
            <table className="table-auto container mx-auto">
                <thead className="bg-blue-500 text-3xl uppercase tracking-widest">
                    <tr>
                        <th className="rounded-none md:py-8">Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Smash Cash Earned</th>
                    </tr>
                </thead>
                <div id="tabs"></div>
                <tbody className="text-center divide-y divide-gray-200">
                    {leaderboardData.map((item, i) => (
                        <tr key={i}>
                            <td className="py-6 sm:py-12">
                                <span className="font-bold">{item.rank}</span>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                            <td>{`${item.earnings}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeaderboardTable
