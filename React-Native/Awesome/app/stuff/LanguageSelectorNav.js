import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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

const LanguageSelector = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
      }}>
      <View>
        <Icon
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
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          height: height * 0.6,
          borderRadius: 8,
        }}>
        <Text style={{fontSize: globalFont.H2, color: 'black'}}>
          Select Language
        </Text>
        <RadioList data={Language} initial={0} />
        {/* {Language.map(item => (
              <View key={item.id}>
                <Text>{item.title}</Text>
                <Image
                  source={item.imageURL}
                  style={{width: 200, height: 100}}
                  resizeMode="contain"
                />
              </View>
            ))} */}
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
      </View>
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({});
