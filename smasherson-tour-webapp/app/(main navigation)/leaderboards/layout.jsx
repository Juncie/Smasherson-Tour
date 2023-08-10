import PageHeader from '@/components/shared/PageHeader'
import Sidebar from '@/components/shared/Sidebar'

export default function Layout({ children }) {
    return (
        <div className="mt-4">
            <PageHeader title="Leaderboards" />
            {children}
        </div>
    )
}
