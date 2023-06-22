"use client";
import { Table } from "flowbite-react"
import { useState, useEffect } from "react";

export default function Leaderboard({data=[], title="Leaderboard"}) {

    const [leaderboardData, setLeaderboardData] = useState([])
    useEffect(() => setLeaderboardData(data), [data])

    return(
        <div className="container mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="font-medium">{title}</h3>
            </div>
          
            <Table striped>
                <Table.Head>
                    <Table.HeadCell className="rounded-none">
                        Rank
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Score
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Smash Cash Earned
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                   {leaderboardData.map((item, i) => (
                        <Table.Row key={i}>
                            <Table.Cell>
                                <span className="font-bold">{item.rank}</span>
                            </Table.Cell>
                            <Table.Cell>
                                {item.name}
                            </Table.Cell>
                            <Table.Cell>
                                {item.score}
                            </Table.Cell>
                            <Table.Cell>
                               {`$${item.earnings}`}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
                                
    )
}