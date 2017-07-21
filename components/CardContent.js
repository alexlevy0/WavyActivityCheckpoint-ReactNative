import React from 'react'
import style from '../Styles'
import { View, Text, StyleSheet } from 'react-native'

export default class CardContent extends React.Component {
    render() {
        // const { content } = this.props
        return (
            <View style={[localStyle.content]}>
                {this.props.children}
                <View style={[localStyle.marginLeft]}>
                    <View style={[localStyle.line]}></View>
                    <View style={[localStyle.lineLite]}></View>
                </View>
            </View>
        )
    }

}
const localStyle = StyleSheet.create({
    marginLeft: {
        marginLeft: 10
    },
    line: {
        marginTop:5,
        width: 120,
        height: 20,
        backgroundColor: 'gainsboro',
    },
    lineLite: {
        width: 45,
        backgroundColor: 'gainsboro',
        padding: 10,
        marginTop: 5,
        flexDirection: 'column'
    },
    spacer: {
        backgroundColor: 'whitesmoke',
        height: 5
    },
    content: {
        paddingTop: 15,
        backgroundColor: 'white',
        height: 100
    }
})