import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'

class Shop extends React.Component {
// export default class Shop extends React.Component {

    render() {
        return (
            <View style={style.container}>
            </View>
        )
    }

}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    title: 'Shop',
}

export default StackNavigator({
    Shop: {
        screen: Shop,
        navigationOptions
    }
})