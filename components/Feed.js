import React from 'react'
import {
    View, Text, StyleSheet, FlatList, ScrollView
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import Card from './Card'
import Bubble from './Bubble'

// export default class Feed extends React.Component {
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
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    title: 'Feed'
}

export default StackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions
    }
})