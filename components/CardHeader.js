import React from 'react'
import style from '../Styles'
import { View, Text, StyleSheet} from 'react-native'

export default class CardHeader extends React.Component {

    render() {
        return (
            <View style={[localStyle.header]}>
                <View style={[localStyle.square]}></View>
                <View style={[localStyle.marginLeft]}>
                    <View style={[localStyle.line]}></View>
                    <View style={[localStyle.lineLite]}></View>
                </View>

                {/* <Text >CardHeader</Text> */}
            </View>
        )
    }

}
const localStyle = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    spacer: {
        backgroundColor: '#D3D3D3',
        height: 5
    },
    square: {
        width: 50,
        height: 50,
        backgroundColor: 'gainsboro',
        marginLeft: 10,
        marginTop: 5
    },
    marginLeft: {
        marginLeft: 10
    },
    line: {
        marginTop:5,
        width: 120,
        // height: 1,
        backgroundColor: 'gainsboro',
        padding: 10
    },
    lineLite: {
        width: 45,
        // height: 2,
        backgroundColor: 'gainsboro',
        padding: 10,
        marginTop: 5,
        flexDirection: 'column'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#3B5998'
    },
    header: {
        // height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        // alignItems: 'space-between'
    },
    content: {
        // height: 40
    }
})