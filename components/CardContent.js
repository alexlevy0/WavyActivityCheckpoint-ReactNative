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
                    <View style={[localStyle.line2]}></View>
                    <View style={[localStyle.line3]}></View>
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
        borderRadius: 10,
        marginTop:5,
        width: 150,
        height: 20,
        backgroundColor: 'gainsboro',
    },
    line2: {
        // height: 3,
        borderRadius: 10,
        width: 235,
        backgroundColor: 'gainsboro',
        // backgroundColor: 'yellow',
        padding: 10,
        marginTop: 5,
        flexDirection: 'column'
    },
    line3: {
        // height: 3,
        borderRadius: 10,
        width: 75,
        backgroundColor: 'gainsboro',
        // backgroundColor: 'yellow',
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
        height: 100,
        // backgroundColor: 'yellow'
    }
})