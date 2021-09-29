import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import colors from '../../../assets/colors'

const screenWidth = Dimensions.get('screen').width

const Button = ({ title, outlined, onPress }) => {

    return (
        <TouchableOpacity style={outlined ? styles.containerOut : styles.container} onPress={onPress}>
            <Text style={outlined ? styles.titleOut : styles.title}> {title} </Text>
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: screenWidth * 0.40,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.blue,
        backgroundColor: colors.blue,
    },

    containerOut: {
        height: 50,
        width: screenWidth * 0.40,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.blue,
        backgroundColor: colors.white,
    },

    title: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 'bold'
    },

    titleOut: {
        fontSize: 14,
        color: colors.blue,
        fontWeight: 'bold'
    }
})