import {Animated, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import StyleConfig, {colors, globalFont, height, width} from '../StyleConfig';
import {Icon, Image} from '@rneui/base';
import {RadioList} from '../components/RadioList';

const Language = [
  {
    id: 1,
    label: 'English',
    imageURL: require('../images/english.png'),
  },
  {
    id: 2,
    label: 'Hindi',
    imageURL: require('../images/hindi.png'),
  },
];

const LanguageSelector = ({isVisible, onClose}) => {
  const animation = new Animated.Value(0); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    // <View>
    <Modal visible={isVisible} transparent onRequestClose={onClose}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          flex: 1,
          justifyContent: 'flex-end',
          // alignItems: 'center',
        }}>
        <Pressable
          style={{flex: 1, justifyContent: 'flex-end'}}
          onPress={onClose}>
          {/* <Icon
            name="close"
            size={StyleConfig.convertFontScale(25)}
            color={'white'}
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 10,
              padding: 5,
            }}
          /> */}
        </Pressable>
        <Animated.View
          style={{
            backgroundColor: 'white',
            padding: 10,
            height: height * 0.6,
            borderRadius: 8,
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 0],
                }),
              },
            ],
          }}>
          <Text style={{fontSize: globalFont.H2, color: 'black'}}>
            Select Language
          </Text>
          <RadioList data={Language} initial={0} />
          <Pressable
            style={{
              backgroundColor: colors.primaryColor,
              position: 'absolute',
              bottom: 10,
              width: width * 0.9,
              alignSelf: 'center',
              paddingVertical: 10,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: StyleConfig.convertFontScale(16),
              }}>
              Select
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
    // </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({});
