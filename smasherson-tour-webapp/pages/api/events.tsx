import { smashersAPI } from './APIInterceptor'

export async function createEventApi(eventData: any) {
    const accessToken = localStorage.getItem('accessToken')
    const stringRewards = JSON.stringify(eventData.rewards)
    const stringPromos = JSON.stringify(eventData.promocodes)
    const stringCourse = JSON.stringify(eventData.course)
    const data: any = await smashersAPI(accessToken).post(
        'v1/admin/events',
        {
            ...eventData,
            rewards: stringRewards,
            promocodes: stringPromos,
            course: stringCourse,
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )
    if (data.error) {
        return {
            data: data,
            error: data.error,
        }
    }
    return {
        data: data,
    }
}

export async function fetchEventApi(payload: any) {
    const accessToken = localStorage.getItem('accessToken')
    const searchTerm = payload.term || ''
    const data: any = await smashersAPI(accessToken).get(
        `v1/admin/events?page=${payload.page}&per_page=${payload.per_page}&term=${searchTerm}`
    )
    if (data.error) {
        return {
            data: data,
            error: data.error,
        }
    }
    return {
        data: data,
    }
}

export async function getSingleEvent(id: any) {
    const accessToken = localStorage.getItem('accessToken')
    const data: any = await smashersAPI(accessToken).get(
        `v1/admin/events/${id}`
    )
    if (data.error) {
        return {
            data: data,
            error: data.error,
        }
    }
    return {
        data: data,
    }
}

export async function deleteEventApi(id: any) {
    const accessToken = localStorage.getItem('accessToken')
    const data: any = await smashersAPI(accessToken).delete(
        `v1/admin/events/${id}`
    )
    if (data.error) {
        return {
            data: data,
            error: data.error,
        }
    }
    return {
        data: data,
    }
}

export async function editEventApi(id: any) {
    const accessToken = localStorage.getItem('accessToken')
    const data: any = await smashersAPI(accessToken).put(
        `v1/admin/events/${id}`
    )
    if (data.error) {
        return {
            data: data,
            error: data.error,
        }
    }
    return {
        data: data,
    }
}

export async function updateEventApi(payload: any) {
    const accessToken = localStorage.getItem('accessToken')
    const stringRewards = JSON.stringify(payload.eventData.rewards)
    const stringPromos = JSON.stringify(payload.eventData.promocodes)
    const stringCourse = JSON.stringify(payload.eventData.course)
    const data: any = await smashersAPI(accessToken).put(
        `v1/admin/events/${payload.id}`,
        {
            ...payload.eventData,
            rewards: stringRewards,
            promocodes: stringPromos,
            course: stringCourse,
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )
    if (data.error) {
        return {
            data: data,
            error: data.error,
        }
    }
    return {
        data: data,
    }
}
