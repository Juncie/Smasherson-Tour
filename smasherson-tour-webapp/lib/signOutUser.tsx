import React from 'react'
import { useUserContext } from '@/context/UserContext'
import { useRouter } from 'next/router'

export default function signOutUser() {
    const { setUser } = useUserContext()
    const router = useRouter()

    console.log('Signing out user...', localStorage.getItem('token'))
    try {
        localStorage.removeItem('access_token')
        setUser(null)
        console.log('User signed out successfully!')
        router.push('/')
    } catch (err) {
        console.error(err)
    }
}
