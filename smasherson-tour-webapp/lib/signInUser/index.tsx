import { smashersAPI } from '@/utils/APIInterceptor'

export async function signInUser(email: string, password: string) {
    const data: any = await smashersAPI().post('/api/v1/users/sign_in', {
        email,
        password,
    })
    console.log('User data', data.data)

    if (data.error) {
        return {
            data,
            error: data.error,
        }
    }
    return {
        data,
    }
}
