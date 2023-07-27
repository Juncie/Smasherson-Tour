import { useMemo } from 'react'

const MONTHS: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const useDateFormat = (dateString: string): string => {
    const formattedDate: string = useMemo(() => {
        const date: Date = new Date(dateString)

        if (isNaN(date.getTime())) {
            return 'Invalid Date'
        }

        const day: number = date.getDate()
        const month: string = MONTHS[date.getMonth()]
        const year: number = date.getFullYear()

        return `${month} ${day}, ${year}`
    }, [dateString])

    return formattedDate
}

export default useDateFormat
