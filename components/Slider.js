import React from 'react'
import {
    View, Text, StyleSheet, Button, Animated,
    Dimensions, PanResponder, StatusBar
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import style from '../Styles'
import BubbleCercle from './BubbleCercle'
import Card from './Card'
import Pager from './Pager'
import Switch from './Switch'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

export default class Slider extends React.Component {
    // class Slider extends React.Component {

    constructor(props) {
        super(props)
        let { width } = Dimensions.get('window')
        Dimensions.addEventListener('change', this.onResize.bind(this))
        this.state = {
            slideLength: 3,
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
        } else {

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

    nextPageManuel() {
        let page = this.state.page + 1
        page >= this.state.slideLength ? page = 0 : true
        console.log("Go Page :", page)
        this.setState({ page })
        // const toValue = this.state.width * -1
        const toValue = this.state.width * -1 * this.state.page

        Animated.timing(
            this.state.translate,
            {
                toValue: toValue,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
        this.state.translate.setValue(0)

    }

    prevPageManuel() {
        let page = this.state.page - 1
        page < 0 ? page = this.state.slideLength : true
        console.log("Prev Page : ", page)
        this.setState({ page })
        const toValue = this.state.width * -1 * this.state.page
        // const toValue = 0
        Animated.timing(
            this.state.translate,
            {
                toValue: toValue,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
        this.state.translate.setValue(0)

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
                flex: 1,
                flexDirection: 'row',
                width: this.state.width * this.state.slideLength,
                left: this.state.page * -1 * this.state.width,
                transform: [{ translateX: translate }],
            },
            slide: {
                width: this.state.width,
            },
        })
    }

    render() {
        const Style = this.getStyle()
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center' }}>{this.state.page}</Text>
                <Animated.View {...this._panResponder.panHandlers} style={[Style.slider]}>
                    <View style={[Style.slide]}>
                        <Card>
                            <View style={[Style.row]}>
                                <Switch />
                            </View>
                        </Card>
                        <Card>
                            <View style={[Style.row]}>
                                <Switch />
                            </View>
                        </Card>
                        {/* <Button color="#841584" onPress={() => this.nextPage()} title="Next Slide" /> */}
                    </View>


                    <View style={[Style.slide]}>
                        <Card>
                            <View style={[Style.row]}>
                                {/* <Text >Deuxieme Page</Text> */}
                                <Switch />
                            </View>
                        </Card>
                        {/* <Button color="#841584" onPress={() => this.prevPageManuel()} title="Prev Slide" />
                        <Button color="#841584" onPress={() => this.nextPageManuel()} title="Next Slide" /> */}
                    </View>


                    <View style={[Style.slide]}>
                        <Card>
                            <View style={[Style.row]}>
                                {/* <Text>Troisième page</Text> */}
                                <Switch />
                            </View>
                        </Card>
                        {/* <Button color="#841584" onPress={() => this.prevPageManuel()} title="Prev Slide" />
                        <Button color="#841584" onPress={() => this.nextPageManuel()} title="Next Slide" /> */}
                    </View>

                </Animated.View >
                {/* <Button color="#3B5998" onPress={() => this.nextPage()} title="Next Slide" /> */}
                <Button color="#3B5998" onPress={() => this.nextPageManuel()} title="Next Slide" />
                <Button color="#3B5998" onPress={() => this.prevPageManuel()} title="Prev Slide" />

            </View>
        )
    }

}

// navigationOptionsSlider = {
//     header: null,
//     // headerTintColor: 'yellow',
//     // header: {
//     //     style: { backgroundColor: 'red' }
//     // },
//     // headerStyle: style.header,
//     // headerStyle: {
//     //     backgroundColor: style.FacebookBlue,
//     //     //     // marginTop: StatusBar.currentHeight
//     // },
//     // headerTitleStyle: style.headerTitle,
//     // title: 'Slider',
// }

// export default StackNavigator({
//     Slider: {
//         screen: Slider,
//         navigationOptionsSlider,
//         headerMode: 'none',
//         header: null,
//     }
// })
