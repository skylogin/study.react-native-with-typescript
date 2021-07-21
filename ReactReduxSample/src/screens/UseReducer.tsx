import React, {useReducer, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import * as D from '../data';
import Person from './Person';
import * as P from '../store/people';

export default function UseReducer() {
  const [scrollEnabled] = useScrollEnabled();
  const [people, dispatch] = useReducer(
    (state: D.IPerson[], action: P.Actions) => {
      switch (action.type) {
        case '@person/add':
          return [...state, action.payload];
        case '@person/delete':
          return state.filter(person => person.id !== action.payload.id);
        case '@person/deleteAll':
          return [];
      }
      return state; // 반드시 있을 필요는 없습니다.
    },
    [],
  );
  const addPerson = () => dispatch(P.addAction(D.createRandomPerson()));
  const removeAllPersons = () => dispatch(P.deleteAllAction());
  const deletePerson = (id: string) => () => dispatch(P.deleteAction(id));
  useEffect(addPerson, []);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <TopBar>
            <UnderlineText onPress={addPerson} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAllPersons} style={styles.text}>
              remove all
            </UnderlineText>
          </TopBar>
          <FlatList
            scrollEnabled={scrollEnabled}
            data={people}
            renderItem={({item}) => (
              <Person person={item} deletePressed={deletePerson(item.id)} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
