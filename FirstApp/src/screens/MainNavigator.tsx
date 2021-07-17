/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Home from './Home';
import Input from './Input';
import KeyboardAvoid from './KeyboardAvoid';
import KeyboardAware from './KeyboardAware';
import AutoFocus from './AutoFocus';
import Basic from './Basic';
import Monitor from './Monitor';
import Toggle from './Toggle';
import Interpolate from './Interpolate';
import Transform from './Transform';
import InsideLayout from './InsideLayout';
import Arithmetic from './Arithmetic';
import Carousel from './Carousel';
import Sequence from './Sequence';
import Parallel from './Parallel';
import Stagger from './Stagger';
import EnterExit from './EnterExit';
import PanRes from './PanRes';
import Drag from './Drag';
import LeftSwipe from './LeftSwipe';

export default function Main() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    // {key: 'home', title: 'Home', icon: 'home'},
    // {key: 'input', title: 'Input', icon: 'apple-keyboard-caps'},
    // {key: 'avoid', title: 'KeyboardAvoid', icon: 'keyboard-variant'},
    // {key: 'aware', title: 'KeyboardAware', icon: 'keyboard-settings-outline'},
    // {key: 'auto', title: 'AutoFocus', icon: 'home-automation'},
    // {key: 'basic', title: 'Basic', icon: 'alpha-b-box'},
    // {key: 'monitor', title: 'Monitor', icon: 'eye-circle'},
    // {key: 'toggle', title: 'Toggle', icon: 'file-eye'},
    // {key: 'interpolate', title: 'Interpolate', icon: 'bullseye'},
    // {key: 'transform', title: 'Transform', icon: 'arrow-collapse-right'},
    // {key: 'layout', title: 'InsideLayout', icon: 'animation-play-outline'},
    // {key: 'arithmetic', title: 'Arithmetic', icon: 'format-annotation-plus'},
    // {key: 'Carousel', title: 'Carousel', icon: 'border-vertical'},
    // {key: 'sequence', title: 'Sequence', icon: 'view-sequential'},
    // {key: 'parallel', title: 'Parallel', icon: 'view-parallel'},
    // {key: 'stagger', title: 'Stagger', icon: 'arrange-send-backward'},
    // {key: 'enterExit', title: 'EnterExit', icon: 'location-enter'},
    {key: 'panRes', title: 'PanRes', icon: 'drag'},
    {key: 'drag', title: 'Drag', icon: 'drag-horizontal'},
    {key: 'leftSwipe', title: 'LeftSwipe', icon: 'arrow-expand-right'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    // home: Home,
    // input: Input,
    // avoid: KeyboardAvoid,
    // aware: KeyboardAware,
    // auto: AutoFocus,
    // basic: Basic,
    // monitor: Monitor,
    // toggle: Toggle,
    // interpolate: Interpolate,
    // transform: Transform,
    // layout: InsideLayout,
    // arithmetic: Arithmetic,
    // Carousel: Carousel,
    // sequence: Sequence,
    // parallel: Parallel,
    // stagger: Stagger,
    // enterExit: EnterExit,
    panRes: PanRes,
    drag: Drag,
    leftSwipe: LeftSwipe,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
