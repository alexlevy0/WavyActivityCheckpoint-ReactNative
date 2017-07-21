import React from 'react'
import Feed from './components/Feed'
import Menu from './components/Menu'
import Notif from './components/Notif'
import Player from './components/Player'
import Shop from './components/Shop'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'

let RCTLog = require('RCTLog')

const Tabs = TabNavigator({
    Notif: { screen: Notif },
    Feed: { screen: Feed },
    Player: { screen: Player },
    Shop: { screen: Shop },
    Menu: { screen: Menu }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            // showIcon: true,
            // showLabel: false,
            showIcon: false,
            showLabel: true,
            indicatorStyle: {
                height: 2,
                backgroundColor: '#3B5998'
            },
            style: {
                backgroundColor: "#3B5998",
                borderTopWidth: 1,
                borderColor: "#3f101c"
            }
        },
    })


export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar style={{ paddingTop : StatusBar.currentHeight }} backgroundColor="blue" barStyle="light-content" />
                <Tabs />
            </View>
        )
    }
}