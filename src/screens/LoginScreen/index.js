import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native'
import { TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

import LargeButton from '../../components/global/LargeButton'
import colors from '../../../assets/colors'

const LoginScreen = ({ navigation }) => {

    const [showPass, setShowPass] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>

                <TextInput
                    mode='outlined'
                    label='Email'
                    style={{ marginBottom: 24 }}
                    autoFocus
                />
                <TextInput
                    mode='outlined'
                    label='Senha'
                    right={<TextInput.Icon
                        name={() => <Ionicons name={showPass ? 'eye' : 'eye-off'} color='#555' size={24} />}
                        onPress={() => setShowPass(pass => !pass)}
                    />}
                    secureTextEntry={!showPass}
                />
            </View>
            <View style={styles.forgotContainer}>
                <Text style={styles.forgotText}>
                    Esqueceu sua senha?
                </Text>
                <TouchableOpacity style={styles.forgotBtnContainer}>
                    <Text style={styles.forgotBtnText}>
                        Clique aqui
                    </Text>
                </TouchableOpacity>
            </View>
            <LargeButton
                title='Entrar'
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.background
    },

    inputContainer: {
        paddingTop: 36
    },

    forgotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 42
    },

    forgotText: {
        marginRight: 4
    },

    forgotBtnContainer: {
        marginBottom: 36
    },

    forgotBtnText: {
        color: colors.pink,
        fontWeight: 'bold'
    },

})