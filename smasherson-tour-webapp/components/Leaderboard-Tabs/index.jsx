'use client'
import { useEffect, useState } from 'react'
import { Card, Pagination, Tabs } from 'flowbite-react'
import Leaderboard from '../Leaderboard'
import Header from '../Header'

export default function LeaderboardTabs({ tabs, pages = false, ...props }) {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const data1 = [
        { rank: 1, name: 'The Golf King', score: 100, earnings: 1000 },
        { rank: 2, name: 'Man of Clubs', score: 90, earnings: 750 },
        { rank: 3, name: 'Morgan Golfman', score: 80, earnings: 500 },
        { rank: 4, name: 'Lazer Eyes', score: 70, earnings: 250 },
        { rank: 5, name: 'The Dahlstrom Bros', score: 60, earnings: 100 },
    ]
    const data2 = [
        { rank: 1, name: 'Mane Dork', score: 100, earnings: 2000 },
        { rank: 2, name: 'Mane Dork', score: 100, earnings: 2000 },
        { rank: 3, name: 'Mane Dork', score: 100, earnings: 1000 },
        { rank: 4, name: 'Mane Dork', score: 100, earnings: 1000 },
        { rank: 5, name: 'Mane Dork', score: 100, earnings: 1000 },
    ]
    const TAB_DATA = [
        {
            title: '3 Hole Tournament',
            children: <Leaderboard data={data1} title="3 Hole Tournament" />,
        },
        {
            title: 'Clostest to the Pin',
            children: <Leaderboard data={data2} title="Clostest to the Pin" />,
        },
        {
            title: 'West Coast',
            children: <Leaderboard data={data1} title="West Coast" />,
        },
        {
            title: 'East Coast',
            children: <Leaderboard data={data2} title="East Coast" />,
        },
    ]
    useEffect(() => setData(tabs ?? TAB_DATA), [tabs])

    return (
        <Card className="bg-black space-y-8 rounded">
            <Header
                title="Leaderboards"
                titleColor="text-white"
                titleSize="2xl"
                btnTitle
                btnType="primary"
                btnVariant="ghost"
                subtitle="View the top players in each tournament."
            />
            <Tabs.Group aria-label="Leaderboard Tabs" style="underline">
                {data.map(({ title, children }, i) => (
                    <Tabs.Item title={title} key={i}>
                        {children}
                    </Tabs.Item>
                ))}
            </Tabs.Group>
            {pages && <Pagination totalPages={5} currentPage={currentPage} />}
        </Card>
    )
}
