import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View, Image } from 'react-native'

import Block from './Block'

class Player extends React.Component {
    render() {
        return (
            <View>
                <Block
                    height={100}
                    left={50}
                    width={'40%'}
                    position="absolute"
                    color="blue"
                    top={'50%'}
                    border={{ color: 'green', size: 5 }}
                />
                <Block
                    height={50}
                    left={50}
                    width={'20%'}
                    opacity={0.7}
                    color="yellow"
                    top={'50%'}
                    border={{ color: 'red', size: 2 }}
                />
            </View>
        )
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