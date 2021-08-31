/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

/*------ navigator ------------*/
import MainNavigator from './src/navigation';

import { colors } from './src/utils/index';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.white} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <MainNavigator />
      </SafeAreaView>
    </View>
  )
}
