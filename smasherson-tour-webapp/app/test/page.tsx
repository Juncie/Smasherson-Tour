import React from 'react'

async function GET() {
    return { data: 'test' }
}

export default function Page() {
    return (
        <div>
            <h1>Test Page</h1>
            <p>Test page content</p>
        </div>
    )
}
