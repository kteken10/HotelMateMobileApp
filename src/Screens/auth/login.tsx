import React from 'react'
import { View } from '../../ui'
import { AuthScreen } from '../../Navigation/MainNavigator'
import { LoginForm } from './login-screen'


export const Login=()=>{

    return(
        <>
            <AuthScreen>
    <LoginForm />
  </AuthScreen>
        </>
    )
}