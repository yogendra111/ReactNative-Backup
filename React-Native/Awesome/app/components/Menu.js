import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import StyleConfig, {colors, globalFont, height} from '../StyleConfig';
import {Icon} from '@rneui/base';

const Menu = ({data, heading, style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Text
        style={{
          fontSize: globalFont.H3,
          color: 'black',
          fontWeight: '600',
          borderLeftWidth: 5,
          borderLeftColor: colors.primaryColor,
          paddingLeft: 15,
          marginTop: height * 0.025,
          marginBottom: 5,
        }}>
        {heading}
      </Text>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '85%',
              height: 1,
              backgroundColor: colors['light-grey'],
              alignSelf: 'flex-end',
            }}
          />
        )}
        renderItem={({item}) => (
          <View style={[GlobalStyles.inlineBox, {padding: 12}]}>
            <Icon
              name={item.icon}
              type={item.iconType}
              size={StyleConfig.convertFontScale(15)}
              style={{
                borderRadius: 20,
                backgroundColor: colors['light-grey'],
                padding: 7,
                marginLeft: 5,
                marginRight: 10,
              }}
            />
            <Text style={{color: 'black', fontSize: globalFont.H4, flex: 1}}>
              {item.title}
            </Text>
            <Icon name="chevron-right" type="feather" />
          </View>
        )}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
