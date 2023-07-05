import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {globalFont} from '../StyleConfig';

const LineHeading = ({style, children}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.hairline} />
      <Text style={styles.heading}>{children}</Text>
      <View style={styles.hairline} />
    </View>
  );
};

export default LineHeading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hairline: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginHorizontal: 10,
  },
  heading: {
    fontSize: globalFont.H4,
    letterSpacing: 1,
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
