/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const MyPager = () => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default MyPager;
