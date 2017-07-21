import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export default class Pager extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },

    text: {
        fontSize: 30,
        color: 'red',
    }
})