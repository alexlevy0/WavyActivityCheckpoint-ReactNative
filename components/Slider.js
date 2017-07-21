import React from 'react'
import {
    View, Text, StyleSheet, Button, Animated,
    Dimensions, PanResponder
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import BubbleCercle from './BubbleCercle'
import Card from './Card'
import Pager from './Pager'
import Switch from './Switch'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

// export default class Slider extends React.Component {
class Slider extends React.Component {

    constructor(props) {
        super(props)
        let { width } = Dimensions.get('window')
        Dimensions.addEventListener('change', this.onResize.bind(this))
        this.state = {
            slideLength: 2,
            width: width,
            page: 0,
            translate: new Animated.Value(0)
        }
    }

    onResize() {
        let { width } = Dimensions.get('window')
        this.setState({ width })
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dx) > 7,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderMove: Animated.event([null, { dx: this.state.translate }]),
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderRelease: () => this.endGesture,
            onPanResponderTerminate: (evt, gestureState) => console.log("Gesture Terminate"),
            onShouldBlockNativeResponder: (evt, gestureState) => true,
        });
    }

    endGesture() {
        console.log("Je lache")
        let toValue = 0
        if (Math.abs(gestureState.dx) / this.state.width > 0.2) { //Si dx > 20%
            if (gestureState.dx) {
                toValue = this.state.width * -1
                console.log("OK ! ", toValue)
            } else {
                toValue = this.state.width
                console.log("KO /!\\ ", toValue)
            }
        }
        console.log("toValue ---> ", toValue)
        this.state.translate.setValue(0)
        Animated.timing(
            this.state.translate,
            {
                toValue: toValue,
                duration: 300,
                useNativeDriver: true
            }
        ).start(() => {
            toValue < 0 ? this.nextPage() : this.prevPage
        })
    }

    nextPage() {
        let page = this.state.page + 1
        page >= this.state.slideLength ? page = 0 : true
        console.log("Go Page :", page)
        this.setState({ page })
    }

    prevPage() {
        let page = this.state.page - 1
        page < 0 ? page = this.state.slideLength : true
        console.log("Prev Page : ", page)
        this.setState({ page })
    }

    getStyle() {
        console.log("this.state.translate : ", this.state.translate)
        const { translate } = this.state;

        return new StyleSheet.create({
            slider: {
                backgroundColor: 'yellow',
                // flex: 1,
                flexDirection: 'row',
                // height: 200,
                width: this.state.width * this.state.slideLength,
                transform: [{
                    translateX: translate
                }],
                left: this.state.page * -1 * this.state.width,
            },
            slide: {
                width: this.state.width,
                // height: 200,
            },
            content: {
                backgroundColor: 'white',
                height: 100
            },
            flex1: {
                flex: 1
            },
            flex0: {
                flex: 0
            },
        })
    }

    render() {
        const Style = this.getStyle()
        return (
            <Animated.View {...this._panResponder.panHandlers} style={Style.slider}>
                <View style={[Style.slide]}>
                    <Text style={[Style.slide, Style.un]}>0</Text>
                    <Pager />
                    <Card>
                        <View style={[Style.row]}>
                            <Text >Blablabla</Text>
                            <Switch />
                        </View>
                    </Card>
                    <Button color="#841584" onPress={() => this.nextPage()} title="Next Slide" />
                </View>
                <Text style={[Style.slide, Style.deux]}>1</Text>
                <Button color="#841584" onPress={() => this.prevPage()} title="Prev Slide" />
                <Text style={[Style.slide, Style.trois]}>2</Text>
                <Text style={[Style.slide, Style.quatre]}>3</Text>
            </Animated.View >
        )
    }

}

navigationOptionsSlider = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    title: 'Slider',
}

export default StackNavigator({
    Slider: {
        screen: Slider,
        navigationOptionsSlider
    }
})
