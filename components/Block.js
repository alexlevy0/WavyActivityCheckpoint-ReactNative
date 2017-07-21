import React, { Component } from 'react'
import { View } from 'react-native'

import blockConfigNew from './blockConfigNew'

const BlockStateLess = props => {
    const blockConf = new blockConfigNew(props)
    return <View style={ blockConf } />
}

export default BlockStateLess