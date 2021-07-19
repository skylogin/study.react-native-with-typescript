/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  UnderlineText,
} from '../theme/navigation';
import * as D from '../data';

const title = 'HomeRight';

export default function HomeRight() {
  const navigation = useNavigation();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [],
  );
  const goRight = useCallback(
    () =>
      navigation.canGoBack() &&
      navigation.navigate('HomeRight', {id: D.randomId()}),
    [],
  );

  const route = useRoute();

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={goBack} style={styles.text}>
            go back
          </UnderlineText>
          <UnderlineText
            onPress={goRight}
            style={(styles.text, {marginLeft: 10})}>
            go Right
          </UnderlineText>
        </TopBar>
        <View style={[styles.content]}>
          <Text style={[styles.text]}>{title}</Text>
          <Text style={[styles.text]}>{JSON.stringify(route, null, 2)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
