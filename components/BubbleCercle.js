import React from 'react'
import style from '../Styles'
import { View, Text, StyleSheet } from 'react-native'

export default class BubbleCercle extends React.Component {

    render() {
        return (
            <View >
                <View style={[localStyle.container]}>
                    <View style={[localStyle.circle]}>
                    </View>
                    <View style={[localStyle.circle]}>
                    </View>
                    <View style={[localStyle.circle]}>
                    </View>
                    <View style={[localStyle.circle]}>
                    </View>
                    <View style={[localStyle.circle]}>
                    </View>
                    <View style={[localStyle.circle]}>
                    </View>
                </View>

                <View style={[localStyle.spacer]}>
                </View>
            </View>
        )
    }

}


const localStyle = StyleSheet.create({
    circle: {
        flexDirection: 'row',
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'whitesmoke',
        marginLeft: 20,
        // paddingBottom: 20,
        // paddingTop: 20,
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row'
    },
    spacer: {
        backgroundColor: 'whitesmoke',
        height: 5
    }

})