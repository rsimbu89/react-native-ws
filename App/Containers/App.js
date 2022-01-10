import '@config'
import DebugConfig from '@config/DebugConfig';

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View
} from 'react-native';
import CheatSheet from '@components/cheatSheet'

import { Colors } from '@resources'
import styles from './Styles/App'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.rgb_0A0A0A : Colors.rgb_0A0A0A,
  };

  return (
    <SafeAreaView style={[styles.appView, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[styles.appBG, styles.appView, backgroundStyle]}>
        <CheatSheet />
      </View>
    </SafeAreaView>
  );
};

export default App;





/*import React,{ Component } from 'react'

import { StatusBar, Text, View } from 'react-native'
import CheatSheet from '@components/cheatSheet'
import styles from './Styles/App'

class App extends Component {
render() {
    return (
    <StatusBar>
        <View style={styles.appBG}>
            <Text style={{color: 'red'}}>
                Hello
            </Text>
            <CheatSheet></CheatSheet>
        </View>
    </StatusBar>
    )
}
}

export default App

*/