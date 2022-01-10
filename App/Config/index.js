import DebugConfig from './DebugConfig'

import { LogBox } from 'react-native'
import '@i18n/I18n'

if (__DEV__) {
    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    if (DebugConfig.yellowBox) {
        LogBox.ignoreAllLogs(!DebugConfig.yellowBox)
    }
}