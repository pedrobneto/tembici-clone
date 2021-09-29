import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { ProgressBar, TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../assets/colors'
import LargeButton from '../../components/global/LargeButton'
import Dash from '../../components/register/Dash'

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
                progress={0.333}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    mode='outlined'
                    label='Email'
                    style={{ marginBottom: 24 }}
                />
                <TextInput
                    mode='outlined'
                    label='Senha'
                    right={<TextInput.Icon
                        name={() => <Ionicons name={showPass ? 'eye' : 'eye-off'} color='#555' size={24} />}
                        onPress={() => setShowPass(pass => !pass)}
                    />}
                    secureTextEntry={!showPass}
                    value={password}
                    onChangeText={(text) => handlePassword(text)}
                />
            </View>
            <View style={styles.dashContainer}>
                <Dash color={password.length < 1 ? colors.lightGray : dashColor} />
                <Dash color={password.length < 4 ? colors.lightGray : dashColor} />
                <Dash color={password.length < 6 ? colors.lightGray : dashColor} />
                <Dash color={password.length < 8 ? colors.lightGray : dashColor} />
                <Dash color={password.length < 11 ? colors.lightGray : dashColor} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitleText}>
                    Torne sua senha mais segura:
                </Text>
                <Text style={styles.infoText}>
                    • Use mais de 8 dígitos;
                </Text>
                <Text style={styles.infoText}>
                    • Combine letras maiúsculas e minúsculas e números;
                </Text>
                <Text style={styles.infoText}>
                    • Não use informações pessoais
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <LargeButton
                    title='Continuar'
                    disabled={password.length < 8 ? true : false}
                    onPress={() => navigation.navigate('FinishRegScreen')}
                />
            </View>
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