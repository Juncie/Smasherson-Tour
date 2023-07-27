import { NextResponse } from 'next/server'

const API_URL = 'https://be.smasherson.com/api/v1/events/'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    payload: {
        type: 'GET',
    },
}

const EVENT_DATA = fetch(API_URL, config).then((res) => res.json())

export async function GET() {
    const data = await EVENT_DATA
    return NextResponse.json(data)
}
