import React from 'react'
import {
    View, Text, ListView, StyleSheet, Button, Animated, Image, ScrollView
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import Card from './Card'
import Slider from './Slider'
import NewPage from './Card'

class Notif extends React.Component {
    openModal() {
        let { navigate } = this.props.navigation
        navigate('Slider')
        // navigate('NewPage')
    }

    render() {
        return (
            <ScrollView>
                <View style={[localStyle.margin]}>
                    <Button style={[localStyle.margin]} color={style.FacebookBlue} onPress={() => this.openModal()} title="Open modal" />
                </View>
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        )
    }
}

const localStyle = StyleSheet.create({
    margin: {
        margin: 5,
    },
})
const navigationOptions = {
    header: null,
    tabBarIcon: () => (<Image source={require('./icons/notif.png')} style={{ width: 50, height: 50 }} />),
}
const navigationOptionsSlider = {
    header: null,
}

export default StackNavigator({
    Notif: {
        screen: Notif,
        navigationOptions,
        headerMode: 'none',
        header: null,
    },
    Slider: {
        screen: Slider,
        navigationOptionsSlider,
        headerMode: 'none',
        header: null,
    },
    NewPage: {
        screen: NewPage,
        navigationOptionsSlider,
        headerMode: 'none',
        header: null,
    },
})
