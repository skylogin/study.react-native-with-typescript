import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, NavigationHeader, TopBar} from '../theme';
import {useInterval} from '../hooks';
import type {AppState} from '../store';
import * as C from '../store/clock';

export default function Clock() {
  const {currentDate, currentTime} = useSelector<AppState, C.State>(
    ({clock}) => clock,
  );
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch(C.setTimeAction(new Date()));
  }, 1000);

  return (
    <View style={[styles.flex]}>
      <NavigationHeader title="Clock" />
      <TopBar />
      <View style={[styles.flex, styles.textView]}>
        <Text style={[styles.text]}>{currentTime}</Text>
        <Text style={[styles.text]}>{currentDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  textView: {alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 30},
});
