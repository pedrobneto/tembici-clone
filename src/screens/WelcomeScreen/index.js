import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const WelcomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>WelcomeScreen</Text>
        </View>
    )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})