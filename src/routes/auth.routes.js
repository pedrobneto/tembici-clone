import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import BackButton from '../components/global/BackButton'
import colors from '../../assets/colors'
import FinishRegScreen from '../screens/FinishRegScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

const AuthRoutes = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <BackButton />,
                headerStyle: {
                    backgroundColor: colors.background
                },
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    fontSize: 18
                }
            }}
        >
            <Stack.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{ title: 'Faça seu login' }}
            />
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{ title: 'Cadastre-se' }}
            />
            <Stack.Screen
                name='FinishRegScreen'
                component={FinishRegScreen}
                options={{ title: 'Crie sua conta' }}
            />
            {/*
                TELAS DO APP (ADICIONARIA REDUX PARA CONTROLAR AS ROUTES)
            */}
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
export default AuthRoutes