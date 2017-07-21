import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import Block from './Block'


// border={{ width: 1, color: 'red', style: 'red' }}
class Player extends React.Component {
    render() {
        return (<Block
            height={50}
            color="yellow"
        />)
    }
}

const navigationOptions = {
    header: null,
    tabBarIcon: () => (<Image source={require('./icons/start.png')} style={{ width: 50, height: 50 }} />)
}

export default StackNavigator({
    Player: {
        screen: Player,
        navigationOptions,
        headerMode: 'none',
        header: null
    }
})