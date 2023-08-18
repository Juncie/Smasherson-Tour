import { useUserContext } from '@/context/UserContext'
import { useRouter } from 'next/router'

export const signOutUser = () => {
    const router = useRouter()

    console.log('Signing out user...', localStorage.getItem('token'))
    try {
        localStorage.removeItem('token')
        console.log('User signed out successfully!')
        router.push('/')
    } catch (err) {
        console.error(err)
    }
}
