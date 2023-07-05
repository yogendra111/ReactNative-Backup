import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';
import {width} from '../StyleConfig';
import {t} from 'i18next';

const CategorySlider = () => {
  const category = [
    {
      id: 1,
      title: t('pizza'),
      imageURI: {
        uri: 'https://cdn.pixabay.com/photo/2016/03/05/21/47/american-1239091_960_720.jpg',
      },
    },
    {
      id: 2,
      title: t('burger'),
      imageURI: {
        uri: 'https://cdn.pixabay.com/photo/2017/07/20/18/27/cheeseburger-2523202_960_720.png',
      },
    },
    {
      id: 3,
      title: t('cake'),
      imageURI: {
        uri: 'https://cdn.pixabay.com/photo/2014/10/13/16/11/cake-486874_960_720.jpg',
      },
    },
    {
      id: 4,
      title: t('rolls'),
      imageURI: {
        uri: 'https://media.istockphoto.com/id/1310998380/photo/fried-chinese-traditional-spring-rolls-food-in-ceramic-plate-on-white-background.jpg?s=1024x1024&w=is&k=20&c=BMRewv4cznUbACaFSGFB9NlYlEfhV3ddCs1Qs7XqfAo=',
      },
    },
    {
      id: 5,
      title: t('sandwich'),
      imageURI: {
        uri: 'https://media.istockphoto.com/id/1337516563/photo/club-sandwich-slice-on-white.jpg?s=1024x1024&w=is&k=20&c=-lf3zEQz4qBjRB3r9QdpASKji17Z7zUQIBSMNl1vais=',
      },
    },
    {
      id: 6,
      title: t('maggi'),
      imageURI: {
        uri: 'https://media.istockphoto.com/id/1464983363/photo/chicken-chow-mien-meal.jpg?s=1024x1024&w=is&k=20&c=e3hspuzCnK-CQVmgvQsnVmp39SPxNI1PpJUE63eunMU=',
      },
    },
    {
      id: 7,
      title: t('rolls'),
      imageURI: {
        uri: 'https://media.istockphoto.com/id/1310998380/photo/fried-chinese-traditional-spring-rolls-food-in-ceramic-plate-on-white-background.jpg?s=1024x1024&w=is&k=20&c=BMRewv4cznUbACaFSGFB9NlYlEfhV3ddCs1Qs7XqfAo=',
      },
    },
    {
      id: 8,
      title: t('sandwich'),
      imageURI: {
        uri: 'https://media.istockphoto.com/id/1337516563/photo/club-sandwich-slice-on-white.jpg?s=1024x1024&w=is&k=20&c=-lf3zEQz4qBjRB3r9QdpASKji17Z7zUQIBSMNl1vais=',
      },
    },
    {
      id: 9,
      title: t('maggi'),
      imageURI: {
        uri: 'https://media.istockphoto.com/id/1464983363/photo/chicken-chow-mien-meal.jpg?s=1024x1024&w=is&k=20&c=e3hspuzCnK-CQVmgvQsnVmp39SPxNI1PpJUE63eunMU=',
      },
    },
  ];
  const renderItem = ({item}) => (
    <Pressable
      style={styles.container}
      onPress={() => {
        Alert.alert('Error', ' Bola na nhi chal raha');
      }}>
      <Image source={item.imageURI} style={styles.image} resizeMode="contain" />
      <Text>{item.title}</Text>
    </Pressable>
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      directionalLockEnabled={true}
      alwaysBounceVertical={false}
      style={{marginVertical: 10}}>
      <FlatList
        // contentContainerStyle={{alignSelf: 'flex-start'}}
        numColumns={Math.ceil(category.length / 2)}
        // showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: width / 4,
    height: width / 4,
  },
});
