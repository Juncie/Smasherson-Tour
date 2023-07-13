'use client'
const generateTestCases = () => {
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

export default function Leaderboard() {
    return(
        <>
            <main className="tracking-widest space-y-16">
                {/* <LeaderboardTable /> */}
                Leaderboard
            </main>
        </>
    )
}