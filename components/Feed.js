import React from 'react'
import {
    View, Text, StyleSheet, FlatList, ScrollView, Image
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import Card from './Card'
import Bubble from './Bubble'

class Feed extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <Bubble />
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Card />}
                    />
                </ScrollView>
            </View>
        )
    }
}

const navigationOptions = {
    header: null,
    tabBarIcon: () => (<Image source={require('./icons/feed.png')} style={{ width: 50, height: 50 }} />),
}

export default StackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions,
        headerMode: 'none',
        header: null,
    }
})