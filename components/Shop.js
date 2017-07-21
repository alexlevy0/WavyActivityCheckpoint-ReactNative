import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import Card from './Card'

class Shop extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </View>
        )
    }
}

const navigationOptions = {
    header: null,
    tabBarIcon: () => (
        <Image source={require('./icons/shop.png')} style={{ width: 50, height: 50 }} />
    ),
}

export default StackNavigator({
    Shop: {
        screen: Shop,
        navigationOptions,
        headerMode: 'none',
        header: null,
    }
})