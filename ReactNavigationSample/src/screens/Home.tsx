/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SafeAreaView, View, UnderlineText, TopBar} from '../theme';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';

import {LeftRightNavigation} from '../components';
import type {LeftRightNavigationMethods} from '../components';

import * as D from '../data';
import Person from './Person';

export default function People() {
  // 네비게이션
  const navigation = useNavigation();
  const goLeft = useCallback(() => navigation.navigate('HomeLeft'), []);
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {name: 'Jack', age: 32}),
    [],
  );

  // ref
  const leftRef = useRef<LeftRightNavigationMethods | null>(null);
  const flatListRef = useRef<FlatList | null>(null);

  // 기존 페이지의 사람정보
  const [scrollEnabled] = useScrollEnabled();
  const [people, setPeople] = useState<D.IPerson[]>([]);

  const addPerson = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people]);
  }, []);
  const removeAllPersons = useCallback(() => {
    setPeople(notUsed => []);
    leftRef.current?.resetOffset();
  }, []);
  const deletePerson = useCallback(
    (id: string) => () => {
      setPeople(people => people.filter(person => person.id != id));
      leftRef.current?.resetOffset();
      flatListRef.current?.scrollToOffset({animated: true, offset: 0});
    },
    [],
  );
  useEffect(() => D.makeArray(5).forEach(addPerson), []);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <TopBar>
            <UnderlineText onPress={goLeft} style={styles.text}>
              go Left
            </UnderlineText>
            <UnderlineText onPress={goRight} style={styles.text}>
              go Right
            </UnderlineText>
          </TopBar>
          <TopBar noSwitch>
            <UnderlineText onPress={addPerson} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAllPersons} style={styles.text}>
              remove all
            </UnderlineText>
          </TopBar>
          <LeftRightNavigation
            ref={leftRef}
            distance={40}
            flatListRef={flatListRef}
            onLeftToRight={goLeft}
            onRightToLeft={goRight}>
            <FlatList
              ref={flatListRef}
              scrollEnabled={scrollEnabled}
              data={people}
              renderItem={({item}) => (
                <Person person={item} deletePressed={deletePerson(item.id)} />
              )}
              keyExtractor={item => item.id}
            />
          </LeftRightNavigation>
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
