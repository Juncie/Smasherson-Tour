export const getEvents = async () => {
    try {
        const response = await fetch(
            'https://staging-be.smasherson.com/api/v1/events/'
        )
        const data = await response.json()
        return data.data
    } catch (error) {
        console.error('Error fetching events:', error)
        return []
    }
}
