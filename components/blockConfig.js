// import * as COLORS from '~/utils/colors'
// import * as DIMENSIONS from "~/utils/dimensions"

const COLOR = {
    "yellow": "yellow"
}

//
// const PROPS_MAP = {
//   flex: Boolean,
//   vertical: Boolean,
//   horizontal: Boolean,
//   color: String (uppercase ==> wavyColors)
//   padding: Array/Number ==> CSS specs
//   margin: Array/Number ==> CSS specs
//   border: Array/Number ==> CSS specs
//   align: String ==> alignItems
//   justify: String ==> justifyContent
//   height: Number => height
//   width: Number => width
//   top: Number
//   bottom:Number
//   left:Number
//   right:Number
//   position:String
//   style: Array/Object
// }
//


const SIMPLE_FIELDS = ['borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth', 'flex', 'paddingRight', 'paddingLeft', 'paddingTop', 'paddingBottom', 'marginRight', 'marginLeft', 'marginTop', 'marginBottom', 'position', 'top', 'right', 'borderRadius', 'left', 'bottom', 'transform', 'overflow']
const FONT_SIMPLE_FIELDS = ['top', 'right', 'left', 'bottom', 'opacity']

export const getColor = (name) => {
    let colorCharCode = name.charCodeAt(0)
    if (colorCharCode >= 65 && colorCharCode <= 90) {
        return COLORS[name];
    } else {
        return name;
    }
}

export const getQuadProp = (name, values, suffix = "") => {

    if (typeof values === 'number') {
        return {
            [name + 'Top' + suffix]: values,
            [name + 'Right' + suffix]: values,
            [name + 'Bottom' + suffix]: values,
            [name + 'Left' + suffix]: values,
        }
    }
    if (values.length === 1) {
        return {
            [name + 'Top' + suffix]: values[0],
            [name + 'Right' + suffix]: values[0],
            [name + 'Bottom' + suffix]: values[0],
            [name + 'Left' + suffix]: values[0],
        }
    }
    if (values.length === 2) {
        return {
            [name + 'Top' + suffix]: values[0],
            [name + 'Right' + suffix]: values[1],
            [name + 'Bottom' + suffix]: values[0],
            [name + 'Left' + suffix]: values[1],
        }
    }
    if (values.length === 3) {
        return {
            [name + 'Top' + suffix]: values[0],
            [name + 'Right' + suffix]: values[1],
            [name + 'Bottom' + suffix]: values[2],
        }
    }
    if (values.length === 4) {
        return {
            [name + 'Top' + suffix]: values[0],
            [name + 'Right' + suffix]: values[1],
            [name + 'Bottom' + suffix]: values[2],
            [name + 'Left' + suffix]: values[3],
        }
    }

}

export const getIconStyle = (props) => {
    let bs = {}
    for (k in FONT_SIMPLE_FIELDS) {
        if (props[FONT_SIMPLE_FIELDS[k]]) {
            bs[[FONT_SIMPLE_FIELDS[k]]] = props[FONT_SIMPLE_FIELDS[k]];
        }
    }
    if (props.color) {
        bs.color = getColor(props.color)
    }
    return bs
}

export const getInputStyle = (props) => {
    let bs = {}
    for (k in FONT_SIMPLE_FIELDS) {
        if (props[FONT_SIMPLE_FIELDS[k]]) {
            bs[[FONT_SIMPLE_FIELDS[k]]] = props[FONT_SIMPLE_FIELDS[k]];
        }
    }
    if (props.color) {
        bs.color = getColor(props.color)
    }
    return bs
}

export const getBlockStyle = (props) => {
    let bs = {}

    for (k in SIMPLE_FIELDS) {
        if (props[SIMPLE_FIELDS[k]]) {
            bs[[SIMPLE_FIELDS[k]]] = props[SIMPLE_FIELDS[k]];
        }
    }
    if (props.borderLeft) {
        bs.borderLeftWidth = props.borderLeft
    }
    if (props.borderTop) {
        bs.borderTopWidth = props.borderTop
    }
    if (props.borderRight) {
        bs.borderRightWidth = props.borderRight
    }
    if (props.borderBottom) {
        bs.borderBottomWidth = props.borderBottom
    }

    if (props.height) {
        bs.height = typeof props.height === 'string' ? DIMENSIONS[props.height] : props.height;
    }

    if (props.width) {
        bs.width = typeof props.width === 'string' ? DIMENSIONS[props.width] : props.width;
    }

    if (props.flex) {
        bs.flex = props.flex === 'number' ? props.flex : 1;
    }

    if (props.row) {
        bs.flexDirection = 'row';
    }
    if (props.column || props.col) {
        bs.flexDirection = 'column';
    }

    if (props.opacity && props.opacity !== true) {
        bs.opacity = props.opacity;
    }

    if (props.center) {
        bs.justifyContent = 'center';
        bs.alignItems = 'center';
    }


    if (props.color) {
        bs.backgroundColor = getColor(props.color)
    }

    if (props.padding) {
        bs = Object.assign(bs, getQuadProp('padding', props.padding))
    }
    if (props.margin) {
        bs = Object.assign(bs, getQuadProp('margin', props.margin))
    }

    if (props.flash) {
        bs.borderColor = 'black'
        bs = Object.assign(bs, getQuadProp('border', [1, 1, 1, 1], 'Width'))
    }

    if (props.borderLeftWidth || props.borderRightWidth || props.borderTopWidth || props.borderBottomWidth || props.borderLeft || props.borderRight || props.borderTop || props.borderBottom) {
        bs.borderColor = COLORS.GREY4
    }

    if (props.border) {
        bs.borderColor = COLORS.GREY4
        bs = Object.assign(bs, getQuadProp('border', props.border, 'Width'))
    }

    if (props.borderColor) {
        bs.borderColor = getColor(props.borderColor)
    }

    if (props.align) {
        bs.alignItems = props.align
    }
    if (props.justify) {
        bs.justifyContent = props.justify;
    }
    return bs
}