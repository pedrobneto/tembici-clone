import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import EmptySvg from '../../../assets/svgs/EmptySvg'
import Card from '../../components/choosePlan/Card'
import colors from '../../../assets/colors'

const ChoosePlanScreen = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.whereText}>
                    Quero pedalar em
                </Text>
                <TouchableOpacity style={styles.cityContainer}>
                    <Text>
                        Vila velha
                    </Text>
                    <Feather name='chevron-down' size={16} color={colors.pink} />
                </TouchableOpacity>
            </View>
            <Text style={styles.choosePlanText}>
                Escolha a categoria de uso que mais combina com seu perfil
            </Text>
            <View style={{ flex: 1 }}>
                <Card
                    title='Vacinação'
                    info='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    price='Vem vacina, vai de bike!'
                    dotColor='#3b3c38'
                />
                <Card
                    title='Eventual'
                    info='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    price='A partir de R$7,00 por dia'
                    dotColor='#000080'
                />
                <Card
                    title='Rotineiro'
                    info='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    price='A partir de R$18,00 por mês'
                    dotColor='#FF5112'
                />
            </View>
        </View>
    )
}
export default ChoosePlanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.background
    },

    whereText: {
        fontSize: 12,
        color: '#999'
    },

    cityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.lightGray,
        marginTop: 8,
        backgroundColor: colors.white,

    },

    cityText: {
        fontSize: 14,
    },

    choosePlanText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
        fontWeight: 'bold',
        marginVertical: 16,
        marginHorizontal: 42
    }
})