import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

import style from '../Styles'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

export default class Card extends React.Component {
    render() {
        return (
            <View style={[localStyle.card]}>
                <CardHeader ></CardHeader>
                <CardContent>
                    {this.props.children}
                </CardContent>
                <View style={[localStyle.spacer]}></View>
            </View>
        )
    }

}

const gris = `#fdebe3`

const localStyle = StyleSheet.create({
    spacer: {
        backgroundColor: '#D3D3D3',
        height: 5
    },
    card: {
        // flex: 0,
        // backgroundColor: `#3B5998`
        backgroundColor: 'red'
    },
})