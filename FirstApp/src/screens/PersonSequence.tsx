// 초기 모습
/*
import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert, Animated, Easing} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {useToggle} from '../hooks' // 추가했습니다.
import {Avatar} from '../components'
import {styles} from './Person.style'

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void // 추가했습니다.
}

const PersonSequence: FC<PersonProps> = ({person, deletePressed}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={Colors.blue500} />
          <Icon name="twitter-retweet" size={24} color={Colors.purple500} />
          <Icon name="heart" size={24} color={Colors.red500} />
        </View>
      </View>
    </View>
  )
}
export default PersonSequence
*/
// 최종 모습
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {useToggle, useTransformStyle} from '../hooks';
import {interpolate} from '../utils';
import {Avatar} from '../components';
import {styles} from './Person.style';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonSequence: FC<PersonProps> = ({person, deletePressed}) => {
  const [started, toggleStarted] = useToggle();
  const animValues = useMemo(
    () => [1, 2, 3].map(notUsed => new Animated.Value(0)),
    [],
  );
  const animations = useMemo(
    () =>
      animValues.map(animValue =>
        Animated.timing(animValue, {
          useNativeDriver: true,
          toValue: !started ? 1 : 0,
          duration: 700,
          easing: Easing.bounce,
        }),
      ),
    [started],
  );
  const avatarPressed = useCallback(() => {
    Animated.sequence(animations).start(toggleStarted);
  }, [started]);
  const leftIconStyle = useTransformStyle({
    translateX: interpolate(animValues[0], !started ? [-1200, 0] : [0, -1200]),
  });
  const centerIconStyle = useTransformStyle({
    translateY: interpolate(animValues[1], !started ? [1200, 0] : [0, 1200]),
  });
  const rightIconStyle = useTransformStyle({
    translateX: interpolate(animValues[2], !started ? [1200, 0] : [0, 1200]),
  });

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <AnimatedIcon
            style={[leftIconStyle]}
            name="comment"
            size={24}
            color={Colors.blue500}
          />
          <AnimatedIcon
            style={[centerIconStyle]}
            name="twitter-retweet"
            size={24}
            color={Colors.purple500}
          />
          <AnimatedIcon
            style={[rightIconStyle]}
            name="heart"
            size={24}
            color={Colors.red500}
          />
        </View>
      </View>
    </View>
  );
};
export default PersonSequence;
