import { smashersAPI } from '@/utils/APIInterceptor'

export async function signInUser(userData: {
    email?: string
    password?: string
}) {
    const data: any = await smashersAPI().post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/admin/sign_in`,
        userData
    )
    if (data.error) {
        return {
            data: data,
            message: data.error,
            success: false,
            token: null,
        }
    }
    return {
        data: data,
        message: 'Successfully signed in.',
        success: true,
        token: data.access_token,
    }
}

console.log(signInUser({ email: 'test', password: 'test' }))
