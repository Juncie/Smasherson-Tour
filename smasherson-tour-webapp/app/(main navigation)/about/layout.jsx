import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <PageHeader title="About" />
            {children}
        </div>
    )
}
