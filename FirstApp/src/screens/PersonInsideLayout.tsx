/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// 초기 모습
/*
import React, {useCallback, useState} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Animated, Easing} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {Avatar} from '../components'
import {styles} from './Person.style'
import {useToggle, useAnimatedValue, useStyle} from '../hooks'
import {interpolate} from '../utils'

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}

const PersonInsideLayout: FC<PersonProps> = ({
  person: initialPerson,
  deletePressed
}) => {
  const [person, setPerson] = useState<D.IPerson>(initialPerson)
  const [started, toggleStarted] = useToggle(false)
  const animValue = useAnimatedValue(0)
  const nameAnimStyle = useStyle({
    transform: [
      {
        translateX: interpolate(animValue, [0, 500])
      }
    ]
  })
  const emailAnimStyle = useStyle({
    transform: [
      {
        rotate: interpolate(animValue, ['0deg', '180deg'])
      }
    ]
  })
  const commentsAnimStyle = useStyle({
    transform: [
      {
        translateY: interpolate(animValue, [0, 200])
      },
      {
        rotate: interpolate(animValue, ['0deg', '45deg'])
      },
      {
        scale: interpolate(animValue, [1, 2])
      }
    ]
  })
  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {
        useNativeDriver: false,
        toValue: started ? 0 : 1,
        easing: Easing.bounce
      }).start(toggleStarted),
    [started]
  )

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar uri={person.avatar} size={50} onPress={avatarPressed} />
        <Text>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Animated.Text style={[styles.name, nameAnimStyle]}>
          {person.name}
        </Animated.Text>
        <Animated.Text style={[styles.email, emailAnimStyle]}>
          {person.email}
        </Animated.Text>
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
        <Animated.Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.comments, commentsAnimStyle]}>
          {person.comments}
        </Animated.Text>
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
export default PersonInsideLayout
*/
// 최종 모습
import React, {useCallback} from 'react';
import type {FC} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as D from '../data';
// prettier-ignore
import {useToggle, useAnimatedValue, useLayout, useTransformStyle} from '../hooks';
import {interpolate} from '../utils';
import {Avatar} from '../components';
import {styles} from './Person.style';

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon);
const iconSize = 50;

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};
const PersonInsideLayout: FC<PersonProps> = ({person, deletePressed}) => {
  const [started, toggleStarted] = useToggle(false);
  const animValue = useAnimatedValue(0);
  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {
        useNativeDriver: false,
        toValue: started ? 0 : 1,
        easing: Easing.bounce,
      }).start(toggleStarted),
    [started],
  );
  const [layout, setLayout] = useLayout();
  const iconAnimStyle = useTransformStyle(
    {
      translateX: interpolate(animValue, [0, layout.width - iconSize]),
      rotate: interpolate(animValue, ['0deg', '720deg']),
    },
    [layout.width],
  );

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
        <Text style={[styles.email]} onPress={avatarPressed}>
          {person.email}
        </Text>
        <View onLayout={setLayout} style={[{flexDirection: 'row', padding: 5}]}>
          <AnimatedIcon
            style={[iconAnimStyle]}
            name="soccer-ball-o"
            size={iconSize}
            color={Colors.blue500}
          />
        </View>
      </View>
    </View>
  );
};
export default PersonInsideLayout;
