import React from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'

import rightIcon from '../../assets/images/right.png'

import styles from './Styles/numberSelectViewStyles'
const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'i', 'C', rightIcon];

const NumberSelectView = (props) => {
    return (
        <View style={styles.numberPadView}>
            <View style={styles.pad}>
                {inputs.map((value, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={(index == 12 || index == 13 ? styles.actionButton : styles.button)}
                            onPress={() => { }}
                        >
                            {
                                index == 13 ?
                                    <Image style={styles.imageView} source={rightIcon}>
                                    </Image>
                                    :
                                    <Text style={styles.buttonText}>
                                        {value}
                                    </Text>
                            }
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

export default NumberSelectView