import Leaderboard from "@/components/Leaderboard"
import LeaderboardTabs from "@/components/Leaderboard-Tabs"

export default function LeaderboardPage() {
    return (
        <>
            <div className="container mx-auto">
                <LeaderboardTabs pages={true} />
            </div>
        </>
    )
}