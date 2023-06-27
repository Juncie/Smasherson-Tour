import Sidebar from '@/components/shared/Sidebar'

export default function Layout({ children }) {
    return (
        <div className="">
            <div className="">
                <Sidebar />
            </div>
            <div className="container mx-auto flex justify-center py-16">
                {children}
            </div>
        </div>
    )
}
