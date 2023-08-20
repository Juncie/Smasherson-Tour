'use client'
import { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

type userData = {
    first_name: string | null
    last_name: string | null
    home_course: string | null
    top_tracer_id: string | null
    phone: string | null
    access_token: string | null
    profile_picture: string | null
}

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)
