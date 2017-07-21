import React from 'react'
import {
    View, Text, ListView, StyleSheet, Button, Animated
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import Card from './Card'
import Slider from './Slider'


class Notif extends React.Component {

    openModal() {
        let { navigate } = this.props.navigation
        navigate('Slider')
    }

    render() {
        return (
            <View style={[localStyle.flex1]}>
                <Button color="#841584" onPress={() => this.openModal()} title="Open modal" />
                <Card style={[localStyle.flex1]} />
                <Card style={[localStyle.flex1]} />
                <Card style={[localStyle.flex1]} />
            </View>
        )
    }
}

const localStyle = StyleSheet.create({
    flex1: {
        flex: 40,
    },
})
const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    title: 'Notif',
}
const navigationOptionsSlider = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    title: 'Slider',
}

export default StackNavigator({
    Notif: {
        screen: Notif,
        navigationOptions
    },
    Slider: {
        screen: Slider,
        navigationOptionsSlider
    }
})
