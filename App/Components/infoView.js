import React from 'react'

import { Image, Text, View } from 'react-native'
import Separator from '@components/Separator'
import clubIcon from '../../assets/images/clubs.png'
import I18n from '@i18n'

import styles from './Styles/infoViewStyles'

const InfoView = (props) => {
    return (
        <View style={[styles.playerInfoView, props.style.playerInfoView]}>
            <View style={[styles.infoView, props.style.infoView]}>
                <View style={[styles.hcpPatternView, props.style.hcpView]}>
                    <Text style={styles.title}>{I18n.t('infoView.hcp')}</Text>
                    <Text style={styles.cardNumberText}>{5}</Text>
                </View>
                <View style={[styles.hcpPatternView, props.style.patternView]}>
                    <Text style={styles.title}>{I18n.t('infoView.pattern')}</Text>
                    <Text style={styles.cardNumberText}>4, 2, 3, 4</Text>
                </View>
                <View style={[styles.cardShapeView, props.style.rotate]}>
                    <Image style={styles.cardImageView} source={clubIcon}>
                    </Image>
                    <Text style={styles.cardNumberText}>{5}</Text>
                </View>
                <View style={[styles.cardShapeView, props.style.rotate]}>
                    <Image style={styles.cardImageView} source={clubIcon}>
                    </Image>
                    <Text style={styles.cardNumberText}>{5}</Text>
                </View>
                <View style={[styles.cardShapeView, props.style.rotate]}>
                    <Image style={styles.cardImageView} source={clubIcon}>
                    </Image>
                    <Text style={styles.cardNumberText}>{5}</Text>
                </View>
                <View style={[styles.cardShapeView, props.style.rotate]}>
                    <Image style={styles.cardImageView} source={clubIcon}>
                    </Image>
                    <Text style={styles.cardNumberText}>{15}{props.playerDirection}</Text>
                </View>
            </View>

            <View style={[styles.playerNameContainer, props.style.wePlayerNameContainer]}>
                <Text style={[styles.playerName]}>
                    {props.playerDirection}  PLAYER NAME
                </Text>
            </View>

        </View>
    )
}

export default InfoView