import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import StyleConfig, {colors, globalFont, width} from '../StyleConfig';
import {Image} from '@rneui/base';
import RadioButton from '../components/RadioList';
import i18n from '../language/i18n';
import BottomSheetHoc from '../hoc/BottomSheetHoc';

const Language = [
  {
    id: 1,
    label: 'English',
    value: 'en',
    imageURL: require('../images/english.png'),
  },
  {
    id: 2,
    label: 'हिंदी',
    value: 'hi',
    imageURL: require('../images/hindi.png'),
  },
];

const LanguageList = ({onClose}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  return (
    <>
      <FlatList
        data={Language}
        ListFooterComponent={<View style={styles.space} />}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.radioContainer}
            key={item.id}
            onPress={() => {
              setSelectedLanguage(item.value);
            }}>
            <RadioButton
              checked={item.value == selectedLanguage}
              color={colors.primaryColor}
              label={item.label}
              onPress={() => {
                setSelectedLanguage(item.value);
              }}
            />
            <Image
              source={item.imageURL}
              style={styles.radioImage}
              resizeMode="contain"
            />
          </Pressable>
        )}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          i18n.changeLanguage(selectedLanguage);
          onClose();
        }}>
        <Text style={styles.buttonTxt}>Select</Text>
      </Pressable>
    </>
  );
};

const LanguageSelector = ({isVisible, onClose}) => {
  const BottomSheet = BottomSheetHoc();

  return (
    <BottomSheet isVisible={isVisible} onClose={onClose}>
      <Text style={styles.heading}>Select Language</Text>
      <LanguageList onClose={onClose} />
    </BottomSheet>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  heading: {
    fontSize: globalFont.H2,
    color: 'black',
  },
  button: {
    backgroundColor: colors.primaryColor,
    position: 'absolute',
    bottom: 10,
    width: width * 0.9,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'white',
    fontSize: StyleConfig.convertFontScale(16),
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cce6ff',
    paddingLeft: 20,
    // paddingVertical: 25,
    // paddingHorizontal: 20,
    margin: 5,
    borderRadius: 10,
  },
  radioImage: {
    height: width * 0.2,
    width: width * 0.3,
  },
  space: {height: 50},
});
