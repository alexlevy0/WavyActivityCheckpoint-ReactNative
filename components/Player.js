import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'

class Player extends React.Component {
// export default class Player extends React.Component {

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
    title: 'Player',
}

export default StackNavigator({
    Player: {
        screen: Player,
        navigationOptions
    }
})