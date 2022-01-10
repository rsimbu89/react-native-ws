import { Platform } from 'react-native'

const family = {
    black:  'Roboto-Black',
    light: 'Roboto-Light',
    normal: 'Roboto-Regular'
}

const size = {
    s9: 9,
    s10: 10,
    s11: 11,
    s13: 13,
    s16: 16
}

const style = {
    black_10 : {
        fontFamily: family.black,
        fontSize: size.s10
    },
    light_10: {
        fontFamily: family.light,
        fontSize: size.s10
    },
    regular_11: {
        fontFamily: family.normal,
        fontSize: size.s11
    },
    regular_13: {
        fontFamily: family.normal,
        fontSize: size.s13
    },
    regular_16: {
        fontFamily: family.normal,
        fontSize: size.s16
    }
}

export default {
    family,
    size,
    style
}