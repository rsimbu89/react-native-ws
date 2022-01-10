import React from 'react'

import { Text, View } from 'react-native'
import { CompassView, InfoView, ModalDialogView } from '@components'
import { scale, verticalScale, guidelineBaseHeight, guidelineBaseWidth } from '@utils/UIScaleUtils'

import styles from './Styles/cheatSheetStyles'

const CheatSheet = (props) => {
    console.log('guidelineBaseHeight = ' + guidelineBaseHeight)
    console.log('guidelineBaseWidth = ' + guidelineBaseWidth)

    console.log('scale guidelineBaseWidth =', scale(guidelineBaseWidth))
    console.log('vs guidelineBaseWidth =', verticalScale(guidelineBaseWidth))


    console.log('scale guidelineBaseHeight =', scale(guidelineBaseHeight))
    console.log('vs guidelineBaseHeight =', verticalScale(guidelineBaseHeight))

    console.log(' verticalScale(guidelineBaseWidth-220), = ' + verticalScale(130))
    console.log(' verticalScale(guidelineBaseWidth-220), = ' + verticalScale(guidelineBaseWidth - 220))
    const playerDirection = 'w'
    return (
        <View style={styles.fullView}>
            <View style={styles.scoreView} >
                <Text>Score View</Text>
            </View>

            <View style={styles.cheatSheetView}>
                <View style={styles.wInfoContainer}>
                    <InfoView playerDirection='w' style={{ infoView: styles.weInfoView, hcpView: styles.wHcpView, patternView: styles.wPatternView, rotate: styles.rotate90DegMinus, playerInfoView: {...styles.wePlayerInfoView, ...styles.fdRow}, wePlayerNameContainer: styles.wPlayerNameContainer }} />
                </View>
                <View style={styles.nsInfoContainer}>
                    <InfoView playerDirection='n' style={{ infoView: styles.nInfoView, playerInfoView: styles.fdColumn }} />
                    <CompassView />
                    <InfoView playerDirection='s' style={{ infoView: styles.sInfoView, playerInfoView: styles.fdColumnReverse }} />
                </View>
                <View style={styles.eInfoContainer}>
                    <InfoView playerDirection='e' style={{ infoView: styles.weInfoView, hcpView: styles.eHcpView, patternView: styles.ePatternView, rotate: styles.rotate90Deg, playerInfoView: {...styles.wePlayerInfoView, ...styles.fdRowReverse}, wePlayerNameContainer: styles.ePlayerNameContainer }} />
                </View>
            </View>
            <ModalDialogView style={{ numberPad : (playerDirection == 'n' || playerDirection == 's') ? {} : (playerDirection == 'w' ? styles.leftModalView : styles.rightModalView) }} />
        </View>
    )
}

export default CheatSheet