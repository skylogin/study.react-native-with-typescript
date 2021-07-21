/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  NavigationHeader,
  TopBar,
  MaterialCommunityIcon as Icon,
} from '../theme';

import type {AppState} from '../store';
import * as C from '../store/counter';

export default function Counter() {
  const counter = useSelector<AppState, C.State>(state => state.counter);
  const dispatch = useDispatch();
  const increaseCounter = useCallback(() => {
    dispatch(C.increaseAction());
  }, []);
  const decreaseCounter = useCallback(() => {
    dispatch(C.decreaseAction());
  }, []);

  return (
    <View style={[styles.flex]}>
      <NavigationHeader title="Counter" />
      <TopBar>
        <Icon name="plus" size={30} onPress={increaseCounter} />
        <Icon name="minus" size={30} onPress={decreaseCounter} />
      </TopBar>
      <View style={[styles.flex, styles.textView]}>
        <Text style={[styles.text]}>counter: {counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
