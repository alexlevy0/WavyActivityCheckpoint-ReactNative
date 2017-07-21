import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'

class Menu extends React.Component {
// export default class Menu extends React.Component {

    static navigationOptions = {
        title: 'Menu',
    }

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
    title: 'Menu',
}

export default StackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions
    }
})