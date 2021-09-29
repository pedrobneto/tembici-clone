import React from 'react'
import {
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../../assets/colors'

const BackButton = ({ onPress }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={32} color={colors.pink} />
        </TouchableOpacity>
    )
}
export default BackButton