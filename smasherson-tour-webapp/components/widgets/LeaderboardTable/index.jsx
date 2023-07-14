import React, { useState, useEffect } from 'react'

const LeaderboardTable = ({ data = [], title = 'Leaderboard' }) => {
    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        setLeaderboardData(data)
    }, [data])

    return (
        <div className="overflow-x-auto w-full pt-36">
            <table className="table-auto container mx-auto">
                <thead className="absolute top-28 bg-blue-500 text-3xl uppercase tracking-widest">
                    <tr>
                        <th className="rounded-none py-16">Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Smash Cash Earned</th>
                    </tr>
                </thead>
                <tbody className="text-center divide-y divide-gray-200">
                    {leaderboardData.map((item, i) => (
                        <tr key={i}>
                            <td className="py-8">
                                <span className="font-bold">{item.rank}</span>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                            <td>{`$${item.earnings}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeaderboardTable
