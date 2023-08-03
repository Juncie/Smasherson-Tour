import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

export default function layout({ children }) {
    ;<PageHeader title="Contact" />
    return <div>{children}</div>
}
