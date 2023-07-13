"use client";

import { useState, useEffect } from "react";

export default function LeaderboardT({data=[], title="Leaderboard"}) {

    const [leaderboardData, setLeaderboardData] = useState([])
    useEffect(() => setLeaderboardData(data), [data])

    return(
            <table className="table-auto">
                <thead className="py-8 bg-blue-500 text-3xl">
                    <tr>
                        <th className="rounded-none">
                            Rank
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Score
                        </th>
                        <th>
                            Smash Cash Earned
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center">
                   {leaderboardData.map((item, i) => (
                        <tr key={i} >
                            <td className="py-8">
                                <span className="font-bold">{item.rank}</span>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.score}
                            </td>
                            <td>
                               {`$${item.earnings}`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>                         
    )
}