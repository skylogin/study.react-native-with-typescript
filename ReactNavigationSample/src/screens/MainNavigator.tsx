import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function MainNavigator() {
  return (
    <View style={[styles.view]}>
      <Text>This is Top text</Text>
      <Text>This is Bottom text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
