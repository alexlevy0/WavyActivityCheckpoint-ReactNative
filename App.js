import React, { Component } from 'react'
import {
    StyleSheet, Text, View, StatusBar, Image, TextInput
} from 'react-native'
import { TabNavigator } from 'react-navigation'

import Feed from './components/Feed'
import Menu from './components/Menu'
import Notif from './components/Notif'
import Player from './components/Player'
import Shop from './components/Shop'
import Style from './Styles'

let RCTLog = require('RCTLog')

const Tabs = TabNavigator(
    {
        Player: { screen: Player },
        Notif: { screen: Notif },
        Feed: { screen: Feed },
        Shop: { screen: Shop },
        Menu: { screen: Menu }
    }, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                height: 3,
                backgroundColor: Style.FacebookBlue
            },
            style: {
                // backgroundColor: "#3B5998",
                backgroundColor: "white",
                // borderTopWidth: 0,
                // borderColor: "#3f101c"
            }
        },
    }
)

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { inputDefaultValue: `Search` }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: Style.FacebookBlue, marginTop: StatusBar.currentHeight }}>
                    <View style={{flex: 1, flexDirection: 'row', alignContent: 'space-between'}}> 
                        <Image
                            source={require('./components/icons/photo.png')}
                            style={{ width: 50, height: 50 }} />
                        <View style={{marginTop:10, borderRadius: 10, flex: 1, height: 30, backgroundColor: '#3B5998'}}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={{ textAlign: 'center', color: '#A9A9A9', flex: 1, borderColor: Style.FacebookBlue, borderWidth: 1 }}
                                value={this.state.inputDefaultValue} />
                        </View>
                        <Image
                            source={require('./components/icons/msg.png')}
                            style={{ width: 50, height: 50 }} />
                    </View>
                </View >
                <Tabs />
            </View >
        )
    }
}