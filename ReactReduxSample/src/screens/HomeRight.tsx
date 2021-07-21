/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  NavigationHeader,
  MaterialCommunityIcon as Icon,
} from '../theme';

import {LeftRightNavigation} from '../components';

const title = 'HomeRight';

export default function HomeRight() {
  const navigation = useNavigation();
  // const route = useRoute();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [],
  );
  const goHome = useCallback(() => navigation.navigate('Home', []), []);

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          Left={() => (
            <Icon name="arrow-left-bold" size={50} onPress={goBack} />
          )}
          Right={() => (
            <Icon
              name="shield-airplane"
              size={30}
              onPress={() => Alert.alert('menu pressed')}
            />
          )}
        />
        <TopBar>
          <Text onPress={goBack}>go back</Text>
          <Text onPress={goHome} style={{marginLeft: 10}}>
            go Home
          </Text>
        </TopBar>
        <LeftRightNavigation distance={40} onRightToLeft={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
          </View>
        </LeftRightNavigation>
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
