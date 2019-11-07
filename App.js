/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const App: () => React$Node = () => {
  return (
    <>
      <ViewPager
        style={{flex: 1}}
        initialPage={0}
        keyboardDismissMode="on-drag"
        scrollEnabled={false}>
        <View key="1" style={{backgroundColor: 'red'}}>
          <Text>First page</Text>
        </View>
        <View key="2" style={{backgroundColor: 'pink'}}>
          <Text>Second page</Text>
        </View>
      </ViewPager>
    </>
  );
};

export default App;
