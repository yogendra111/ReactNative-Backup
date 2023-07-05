import {View, Text, Image, Pressable, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import StyleConfig, {colors, width} from '../StyleConfig';

const RadioButton = ({checked = false, color = '#666', label, onPress}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Pressable
      style={{flexDirection: 'row'}}
      onPress={
        onPress
          ? onPress
          : () => {
              setIsChecked(!isChecked);
            }
      }>
      <View
        style={{
          height: 25,
          width: 25,
          borderWidth: 3,
          borderColor: color,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isChecked && (
          <View
            style={{
              width: 13,
              height: 13,
              backgroundColor: color,
              borderRadius: 20,
            }}
          />
        )}
      </View>
      {label && (
        <Text
          style={{
            fontSize: StyleConfig.convertFontScale(14),
            marginLeft: 10,
            fontWeight: '600',
            color: '#000',
          }}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export const RadioList = ({data = [], onValueChange, initial = 0}) => {
  // const [checkList, setCheckList] = useState(
  //   data.map((item, index) => initial == index),
  // );
  // console.log('CheckList', checkList);
  return (
    <FlatList
      data={data}
      ListFooterComponent={<View style={{height: 50}} />}
      renderItem={({item, index}) => (
        <Pressable
          style={styles.radioContainer}
          key={item.id}
          onPress={() => {
            // setCheckList(
            //   checkList.map((item, currIndex) => currIndex == index),
            // );
            onValueChange(index);
          }}>
          <RadioButton
            checked={item.selected}
            color={colors.primaryColor}
            label={item.label}
            onPress={() => {
              onValueChange(index);
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
  );
};

export default RadioButton;

const styles = StyleSheet.create({
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
});
