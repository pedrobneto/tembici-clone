import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    StyleSheet, ScrollView
} from 'react-native'
import { ProgressBar, TextInput } from 'react-native-paper'
import TextInputMask from 'react-native-text-input-mask'
import Ionicons from 'react-native-vector-icons/Ionicons'

import LargeButton from '../../components/global/LargeButton'
import Dash from '../../components/register/Dash'
import colors from '../../../assets/colors'

const RegisterScreen = ({ navigation }) => {

    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const [dashColor, setDashColor] = useState('')

    const handlePassword = (text) => {
        setPassword(text)

        if (text.length < 4) {
            setDashColor('red')
        } else if (text.length < 8) {
            setDashColor('orange')
        } else {
            setDashColor('green')
        }
    }

    return (
        <View style={styles.container}>
            <ProgressBar
                style={styles.progressBar}
                color={colors.pink}
                progress={0.666}
            />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        mode='outlined'
                        label='CPF'
                        style={{ marginBottom: 24 }}
                        keyboardType='numeric'
                        render={props =>
                            <TextInputMask
                                {...props}
                                mask='[000].[000].[000]-[00]'
                            />
                        }
                    />
                    <TextInput
                        mode='outlined'
                        label='Nome igual ao documento'
                        style={{ marginBottom: 24 }}
                    />
                    <TextInput
                        mode='outlined'
                        label='Nascimento'
                        style={{ marginBottom: 24 }}
                        keyboardType='numeric'
                        render={props =>
                            <TextInputMask
                                {...props}
                                mask='[00]/[00]/[0000]'
                            />
                        }
                    />
                    <TextInput
                        mode='outlined'
                        label='Telefone'
                        keyboardType='numeric'
                        render={props =>
                            <TextInputMask
                                {...props}
                                mask='([00])[00000]-[0000]'
                            />
                        }
                    />
                </View>
                <View style={styles.btnContainer}>
                    <LargeButton
                        title='Continuar'
                        onPress={() => navigation.navigate('FinishRegScreen')}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    progressBar: {
        backgroundColor: colors.lightGray,
    },

    inputContainer: {
        paddingTop: 36,
        marginHorizontal: 16,
        marginBottom: 24
    },

    dashContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 36
    },

    infoContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },

    infoText: {
        fontSize: 16,
        color: '#888'
    },

    infoTitleText: {
        fontSize: 16,
        color: '#888',
        marginBottom: 8
    },

    btnContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        marginBottom: 24
    }
})