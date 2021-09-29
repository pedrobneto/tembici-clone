import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import colors from '../../../assets/colors'

const LargeButton = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: disabled ? 'rgba(248, 5, 130, 0.5)' : colors.pink }]}
            onPress={onPress}
        >
            <Text style={styles.titleText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default LargeButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.pink,
        borderRadius: 6
    },

    titleText: {
        fontSize: 16,
        color: colors.white
    }
})