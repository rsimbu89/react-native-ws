import React from 'react'

import { View } from 'react-native'

import styles from './Styles/separatorStyles'

function Separator(props) {
    return (
        <View style={[styles.container, props.style]} />
    )
}

export default Separator