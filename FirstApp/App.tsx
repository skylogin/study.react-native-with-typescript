/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, useMemo, FC, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native-paper';
import color from 'color';
// import Person from './src/copy/Person';
// import * as D from './src/data';
// import { styles } from './src/copy/Person.style';
// import { time } from 'faker';

import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';
import {ToggleThemeProvider} from './src/contexts';

import PersonUsingValueState from './src/screens/PersonUsingValueState';
import PersonUsingObjectState from './src/screens/PersonUsingObjectState';
import PersonUsingPassingState from './src/screens/PersonUsingPassingState';

// import {useClock} from './src/hooks';

const {width} = Dimensions.get('window');

type PersonInformation = {
  title: string;
  Component: FC<any>;
};
const personInfomations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState},
];
const numberOfComponents = personInfomations.length;

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );
  const toggleTheme = useCallback(
    () => setTheme(theme => (theme.dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={styles.safeAreaView}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  );

  // const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);

  // const children = useMemo(
  //   () =>
  //     personInfomations.map(({title, Component}: PersonInformation) => (
  //       <View style={{flex: 1}} key={title}>
  //         <Text style={[styles.text]}>{title}</Text>
  //         <FlatList
  //           data={people}
  //           renderItem={({item}) => <Component person={item} />}
  //           keyExtractor={(item, index) => item.id}
  //           ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
  //         />
  //       </View>
  //     )),
  //   [],
  // );
  // return (
  //   <SafeAreaView style={styles.flex}>
  //     <ScrollView
  //       horizontal
  //       contentContainerStyle={styles.horizontalScrollView}>
  //       {children}
  //     </ScrollView>
  //   </SafeAreaView>
  // );

  // const time = useClock();
  // return (
  //   <SafeAreaView style={styles.flex}>
  //     {/* list로 Person 가객체 뿌려주기
  //     <FlatList
  //       data={people}
  //       renderItem={({item}) => <Person person={item} />}
  //       keyExtractor={(item, index) => item.id}
  //       ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
  //     /> */}

  //     <Text style={[styles.digitFont, styles.time]}>
  //       {time.toLocaleTimeString()}
  //     </Text>
  //     <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
  //   </SafeAreaView>
  // );
}
// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  flex: {flex: 1, alignItems:'center', justifyContent: 'center'},
  itemSeparator: {
    borderWidth: 1,  borderColor: color(Colors.grey500).lighten(0.3).string(),
  },
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
  horizontalScrollView: {width: width * numberOfComponents},
  text: {fontSize: 24, textAlign: 'center'},
});
