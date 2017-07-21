import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import _ from 'lodash'

const ALLOW_FIELDS = [
    'color',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth',
    'flex',
    'height',
    'paddingRight',
    'paddingLeft',
    'paddingTop',
    'paddingBottom',
    'marginRight',
    'marginLeft',
    'marginTop',
    'marginBottom',
    'position',
    'top',
    'right',
    'borderRadius',
    'left',
    'bottom',
    'transform',
    'overflow'
]

const ALLOW_FIELDS_BORDER = {
    color: 'borderColor',
    size: 'borderWidth',
    horizontal: 'horizontal',
}

const ALLOW_FIELDS_OBJS = {
    'color': 'backgroundColor',
    'flex': 'flex',
    'height': 'height',
    'opacity': 'opacity',
    'elevation': 'elevation',
    'position': 'position',
    'top': 'top',
    'right': 'right',
    'left': 'left',
    'radius': 'borderRadius',
    'bottom': 'bottom',
    'transform': 'transform',
    'overflow': 'overflow',
    'zIndex': 'zIndex',
    'iosdirection': 'iosdirection',
    'borderBottomColor': 'borderBottomColor',
    'border': borderAttr => {
        const allowBorderAttr = _.pick(borderAttr, _.keys(ALLOW_FIELDS_BORDER))
        return _.mapKeys(allowBorderAttr, (value, key) => ALLOW_FIELDS_BORDER[key])
    },
}

const blockConfigNew = props => {
    let dynamiqStyleToApply = {}
    const allowAttr = _.pick(props, _.keys(ALLOW_FIELDS_OBJS))
    const styleToApply = _.mapKeys(allowAttr, (value, key) => {
        if (typeof ALLOW_FIELDS_OBJS[key] === 'function')
            _.assign(dynamiqStyleToApply, ALLOW_FIELDS_OBJS[key](value))
        else
            return ALLOW_FIELDS_OBJS[key]
    })
    const styleToReturn = _.omit(_.assign(styleToApply, dynamiqStyleToApply),
        ['undefined'])
    console.log("styleToReturn--> ", styleToReturn);
    return styleToReturn
}
export default blockConfigNew
