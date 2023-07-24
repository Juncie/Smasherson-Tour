import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const API_URL = 'https://staging-be.smasherson.com/api/v1/evnts/'

export const getEvents = async () => {
    const { data, error, isLoading } = useSwr(API_URL, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return data
}
