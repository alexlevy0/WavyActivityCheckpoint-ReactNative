import React, { Component } from 'react'
import { View } from 'react-native'

import blockConfig from './blockConfig'

const BlockStateLess = props => {
    return <View style={ new blockConfig(props) } />
}
export default BlockStateLess