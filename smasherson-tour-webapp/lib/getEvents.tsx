import { smashersAPI } from '@/utils/APIInterceptor'
import useSWR from 'swr'
import { EventProps } from '@/types'

const fetchEventApi = async (url: string) => {
    const accessToken = localStorage.getItem('accessToken')
    const data = await smashersAPI(accessToken).get(url)
    if (data.data.error) {
        throw new Error(data.data.error)
    }

    // Filter events where event_status !== 'Ended'
    const filteredData = data.data.filter(
        (event: EventProps) => event.status !== 'ENDED'
    )
    return filteredData
}

const getEvents = (payload: {
    page: number
    perPage?: number
    searchTerm?: string
}) => {
    const currentPage = payload.page
    const perPage = payload?.perPage || 10
    const searchTerm = payload?.searchTerm || ''

    // Define the URL based on the current page and other parameters
    const url = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/admin/events?page=${currentPage}&per_page=${perPage}&term=${searchTerm}`

    // Fetch data using the custom fetch function
    const { data, error } = useSWR(url, fetchEventApi)

    // Handle any loading or error states
    if (error) {
        return { events: [], error: error.message }
    }

    if (!data) return { events: [], loading: true }

    // Return the filtered events data
    return { events: data }
}

console.table(getEvents({ page: 4 }))

export default getEvents
