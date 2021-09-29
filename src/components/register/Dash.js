import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import colors from '../../../assets/colors'

const Dash = ({ color }) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]} />
    )
}
export default Dash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        marginRight: 4,
    }
})