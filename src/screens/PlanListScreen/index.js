import React from 'react'
import {
    View,
    Text,
    StyleSheet, ScrollView
} from 'react-native'
import colors from '../../../assets/colors'
import Card from '../../components/plan/Card'

const PlanListScreen = ({ route }) => {

    const plans = route.params ? route.params.plans : null
    const color = route.params ? route.params.color : null

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {plans ? (
                plans.map((plan, index) => (
                    <Card
                        title={plan.title}
                        name={plan.name}
                        info={plan.info}
                        time={plan.time}
                        price={plan.price}
                        key={index}
                        color={color}
                    />
                ))
            ) : (
                    <Text>
                        Erro
                    </Text>
                )}

        </ScrollView>
    )
}
export default PlanListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    contentContainer: {
        padding: 16
    }
})