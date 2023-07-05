import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import StyleConfig, {height} from '../StyleConfig';
import ReactNativeModal from 'react-native-modal';
import {Icon} from '@rneui/base';

const BottomSheetHoc = () => {
  return ({isVisible, onClose, children}) => (
    <ReactNativeModal
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={1000}
      // backdropTransitionInTiming={1000}
      // backdropTransitionOutTiming={500}
      style={styles.modal}>
      <Pressable onPress={onClose}>
        <Icon
          name="close"
          size={StyleConfig.convertFontScale(25)}
          color={'white'}
          style={styles.crossIcon}
        />
      </Pressable>
      <View style={styles.bottomSheet}>{children}</View>
    </ReactNativeModal>
  );
};

export default BottomSheetHoc;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  crossIcon: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 40,
    marginBottom: 10,
    padding: 5,
    alignSelf: 'center',
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 10,
    maxHeight: height * 0.6,
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
