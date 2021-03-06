import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, Animated
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../../assets/colors'


const Card = ({ onPress, title, info, price, dotColor, animValue, index }) => {

    const positionY = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-20 * index, 0]
    })

    const opacity = index ? animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1]
    }) : 1

    const scale = index ? animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1.15, 1]
    }) : 1

    return (
        <Animated.View style={[styles.container, { transform: [{ translateY: positionY }, { scale: scale }] }]}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.btnContainer}
            >
                <View style={styles.linesContainer}>
                    <View style={styles.smallLine} />
                    <View style={[styles.dot, { backgroundColor: dotColor }]} />
                    <View style={styles.line} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.titleText}>
                        {title}
                    </Text>
                    <Text style={styles.infoText}>
                        {info}
                    </Text>
                    <Text style={styles.priceText}>
                        {price}
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Feather name='chevron-right' size={16} color={colors.pink} />
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Card

const styles = StyleSheet.create({

    container: {
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2
    },

    btnContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
    },


    infoContainer: {
        flex: 1,
        marginLeft: 8,
        marginVertical: 16,
    },

    titleText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold'
    },

    infoText: {
        fontSize: 14,
        color: colors.darkGray,
        marginVertical: 4
    },

    priceText: {
        fontSize: 14,
        color: colors.pink
    },

    linesContainer: {
        justifyContent: 'space-between'
    },

    line: {
        flex: 1,
        width: 14,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: colors.lightGray
    },

    smallLine: {
        height: 15,
        width: 14,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: colors.lightGray
    },

    dot: {
        height: 14,
        width: 14,
        borderRadius: 7,
        marginVertical: 4,
        backgroundColor: colors.darkGray
    },

    iconContainer: {
        justifyContent: 'center',
        marginLeft: 8
    }

})