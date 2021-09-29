import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    StyleSheet
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Button from '../../components/global/Button'
import RoundButton from '../../components/global/RoundButton'
import Map from '../../components/Map'
import colors from '../../../assets/colors'
import UpdateButton from '../../components/global/UpdateButton'

const screenHeight = Dimensions.get('screen').height

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <>
                <Map />
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <RoundButton icon={<Feather name="menu" size={24} color={colors.white} />} />
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.roundBtnContainer}>
                            <UpdateButton icon={<Feather name="refresh-ccw" size={24} color={colors.white} />} />
                            <RoundButton icon={<MaterialIcons name="my-location" size={24} color={colors.white} />} />
                        </View>
                        <View style={styles.btnContainer}>
                            <Button
                                title='Entrar'
                                outlined
                                onPress={() => navigation.navigate('LoginScreen')}
                            />
                            <Button
                                title='Cadastrar'
                                onPress={() => navigation.navigate('RegisterScreen')}
                            />
                        </View>
                    </View>
                </View>
            </>
        </SafeAreaView>
    )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.background
    },

    topContainer: {
        marginTop: 24,
        marginLeft: 16,
    },

    bottomContainer: {
        alignItems: 'flex-end',
    },

    roundBtnContainer: {
        paddingRight: 16
    },

    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: screenHeight * 0.1,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 16,
        backgroundColor: colors.white,
    }




})