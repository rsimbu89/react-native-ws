import React from 'react'

import { Text, View } from 'react-native'

import styles from './Styles/compassViewStyles'

const CompassView = (props) => {
    return (
        <View style={styles.compassView}>
            <View style={styles.weContainer}>
                <Text style={styles.title}>
                    W
                </Text>
            </View>
            <View style={styles.nsContainer}>
                <Text style={styles.title}>
                    N
                </Text>
                <View style={styles.pointerView}>
                    <View style={styles.pointer} />
                </View>
                <Text style={styles.title}>
                    S
                </Text>
            </View>
            <View style={styles.weContainer}>
                <Text style={styles.title}>
                    E
                </Text>
            </View>
        </View>
    )
}

export default CompassView