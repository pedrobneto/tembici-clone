import React, { useEffect, useRef, useState } from 'react'
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

import EmptySvg from '../../../assets/svgs/EmptySvg'
import Card from '../../components/choosePlan/Card'

import Plans from '../../../assets/data/Plans'
import colors from '../../../assets/colors'

const ChoosePlanScreen = (props) => {

    const cardAnimation = useRef(new Animated.Value(0)).current
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            animateCard()
        }, 500)
    }, [])

    const animateCard = () => {
        Animated.timing(cardAnimation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start()
    }

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
            <View style={styles.cardContainer}>
                {loading ?
                    <ActivityIndicator size={40} color={colors.pink} /> : (
                        Plans.map((plan, index) => (
                            <Card
                                title={plan.name}
                                info={plan.info}
                                price={plan.price}
                                dotColor={plan.color}
                                animValue={cardAnimation}
                                index={index}
                                key={index}
                            />
                        ))
                    )}
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
        marginTop: 16,
        marginHorizontal: 42
    },

    cardContainer: {
        flex: 1,
        marginTop: 16
    }
})