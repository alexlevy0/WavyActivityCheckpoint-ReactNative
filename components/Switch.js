import React from 'react'
import {
    View, Text, Switch, StyleSheet
} from 'react-native'

export default class SwitchCo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { switchValue: false }
    }

    toggleSwitch = (value) => this.setState({ switchValue: value })

    render() {
        return (
            <View style={styles.container}>
                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
    },
})