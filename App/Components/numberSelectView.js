import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import styles from './Styles/numberSelectViewStyles'
const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'i', 'C', '√'];

const NumberSelectView = (props) => {
    return (
        <View style={styles.numberPadView}>
            <View style={styles.pad}>
                {inputs.map((value, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.button, { width: index == 12 || index == 13 ? '49.5%' : '33%' }]}
                            onPress={() => { }}
                        >
                            <Text style={styles.buttonText}>
                                {value}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

export default NumberSelectView