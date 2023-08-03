import React from 'react'
import Button from '.'
import { FcGoogle } from 'react-icons/fc'

import { ButtonProps } from '@/types'

const GoogleSignInButton: React.FC = (props: ButtonProps) => {
    const handleGoogleSignIn = () => {
        console.log('Signing in with Google...')
    }

    return (
        <Button
            color={props.color}
            size={props.size || 'full'}
            icon={<FcGoogle />}
            onClick={handleGoogleSignIn}
            text="Sign In with Google"
        >
            {props.text}
        </Button>
    )
}

export default GoogleSignInButton
