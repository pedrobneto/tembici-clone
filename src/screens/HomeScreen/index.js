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

import RoundButton from '../../components/global/RoundButton'
import Map from '../../components/Map'
import UpdateButton from '../../components/global/UpdateButton'
import LargeButton from '../../components/global/LargeButton'
import colors from '../../../assets/colors'

const HomeScreen = ({ navigation }) => {
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
                            <Text style={styles.choosePlanText}>
                                Curta a cidade sob uma nova perspectiva. Escolha um plano e comece a pedalar por aí
                            </Text>
                            <LargeButton
                                title='Escolher um plano'
                                color={colors.blue}
                            />
                        </View>
                    </View>
                </View>
            </>
        </SafeAreaView>
    )
}
export default HomeScreen

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
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 16,
        backgroundColor: colors.white,
    },

    choosePlanText: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 14
    }


})