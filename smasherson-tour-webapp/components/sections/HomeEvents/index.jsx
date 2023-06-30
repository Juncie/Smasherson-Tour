import React from 'react'
import SectionHeader from '@/components/shared/SectionHeader'

export default function HomeEvents(props) {
    return (
        <div>
            <SectionHeader
                title="Events"
                subtitle="Subtitle"
                actionTitle="View All"
                actionURL="/events"
                action2Title="Add Event"
                action2URL="/events/add"
                border={true}
            />
        </div>
    )
}
