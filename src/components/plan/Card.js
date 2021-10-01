import React from 'react'
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import colors from '../../../assets/colors'

const Card = ({ title, name, info, time, price, color }) => {
    return (
        <>
            {title ? (
                <Text style={styles.titleText}>
                    {title}
                </Text>
            ) : null}
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.nameText}>
                            {name}
                        </Text>
                        <TouchableOpacity>
                            <Feather name="alert-circle" size={16} color='#FF5112' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={[styles.line, { backgroundColor: color }]} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>
                                {info}
                            </Text>
                            {time ? (
                                <Text style={styles.infoText}>
                                    {time}
                                </Text>
                            ) : null}
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                            R$ {price}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
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
        padding: 16,
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    titleText: {
        fontSize: 11,
        marginBottom: 8,
        color: colors.darkGray
    },

    nameText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold'
    },

    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },

    infoContainer: {
        justifyContent: 'space-between',
        flexShrink: 1
    },

    infoText: {
        fontSize: 14,
        color: colors.darkGray
    },

    line: {
        width: 6,
        borderRadius: 4,
        height: '100%',
        marginRight: 8,
        backgroundColor: 'red'
    },

    priceContainer: {
        marginTop: 16
    },

    priceText: {
        fontSize: 22,
        color: colors.pink,
        fontWeight: 'bold'
    },
})