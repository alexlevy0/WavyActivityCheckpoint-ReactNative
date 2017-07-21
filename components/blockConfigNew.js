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


const ALLOW_FIELDS_OBJS = {
    'color': 'backgroundColor',
    // 'border-right': border(), //border-width border-style border-color|initial|inherit
    // 'borderLeftWidth': 'borderLeftWidth',
    // 'borderRightWidth',
    // 'borderTopWidth',
    // 'borderBottomWidth',
    'flex': 'flex',
    'height': 'height',
    'opacity': 'opacity',
    'elevation': 'elevation',
    // 'paddingRight',
    // 'paddingLeft',
    // 'paddingTop',
    // 'paddingBottom',
    // 'marginRight',
    // 'marginLeft',
    // 'marginTop',
    // 'marginBottom',
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
    'border': (value) => {
        console.log("----> toBorder : ", value)
        return {
            'border': value
        }
    },

}

const blockConfigNew = props => {
    const allowAttr = _.pick(props, _.keys(ALLOW_FIELDS_OBJS))
    const styleToApply = _.mapKeys(allowAttr, (value, key) => {
        typeof ALLOW_FIELDS_OBJS[key] === 'function'
            ? ALLOW_FIELDS_OBJS[key](value)
            : ALLOW_FIELDS_OBJS[key]
    })


    console.table("styleToApply : ", styleToApply)
    return styleToApply
}

export default blockConfigNew
// border={{width:1, color; 'red', style:'red'}}
// border={{horizontal}}
