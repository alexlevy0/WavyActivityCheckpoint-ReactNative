import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import style from '../Styles'
import BubbleCercle from './BubbleCercle'

export default class Bubble extends React.Component {

    render() {
        return (
            <View style={[localStyle.content]}>
                <BubbleCercle></BubbleCercle>
            </View>
        )
    }

}

const localStyle = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center'
        // paddingTop: 20,
        // paddingBottom: 20,
        // marginBottom: 20,
        // marginTop: 20,
        backgroundColor: 'white',
        height: 75,
        // flex:1,
    }
})