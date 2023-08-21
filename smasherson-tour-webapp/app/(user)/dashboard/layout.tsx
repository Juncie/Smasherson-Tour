// components/Layout/DashboardLayout.tsx
import React from 'react'
import Sidebar from '@components/shared/Sidebar'

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <main className="flex-grow p-4">{children}</main>
        </div>
    )
}

export default DashboardLayout
