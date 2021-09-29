import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import colors from '../../../assets/colors'


const RoundButton = ({ icon, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon}
        </TouchableOpacity>
    )
}
export default RoundButton

const styles = StyleSheet.create({
    container: {
        height: 42,
        width: 42,
        padding: 8,
        borderRadius: 25,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue
    }
})