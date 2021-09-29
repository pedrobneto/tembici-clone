import React, { useRef } from 'react'
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import colors from '../../../assets/colors'
import RoundButton from './RoundButton'

const UpdateButton = ({ icon, onPress }) => {

    const animValue = useRef(new Animated.Value(0)).current

    const spinAnim = () => {
        Animated.timing(animValue, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start(() => animValue.setValue(0))
    }

    const rotation = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['60deg', '420deg']
    })

    return (
        <TouchableOpacity onPress={spinAnim}>
            <Animated.View style={[styles.container, { transform: [{ rotate: rotation }] }]}>
                <View>
                    {icon}
                </View>
            </Animated.View>
        </TouchableOpacity>
    )
}
export default UpdateButton

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