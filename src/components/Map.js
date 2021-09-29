import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Map = (props) => {
    return (
        <View style={styles.container} />
    )
}
export default Map

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#EEE'
    }
})