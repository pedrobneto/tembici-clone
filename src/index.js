import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Routes from './routes'
import colors from '../assets/colors'

const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.pink,
        accent: colors.pink,
        error: 'red',
        text: colors.black,
        background: colors.background
    }
}

const MainNavigation = (props) => {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            <NavigationContainer>
                <PaperProvider theme={theme}>
                    <Routes />
                </PaperProvider>
            </NavigationContainer>
        </>
    )
}
export default MainNavigation