import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'

const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}
export default MainNavigation