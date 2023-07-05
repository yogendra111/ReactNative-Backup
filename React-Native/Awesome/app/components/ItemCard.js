import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import {colors, globalFont, height} from '../StyleConfig';
import {Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

const ItemCard = () => {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        borderRadius: 15,
        margin: 10,
        // elevation: 5,
        overflow: 'hidden',
      }}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        }}
        style={{height: height / 4, justifyContent: 'flex-end'}}>
        <Icon
          name="heart"
          type="feather"
          color={'white'}
          containerStyle={{position: 'absolute', top: 10, right: 10}}
        />
        <LinearGradient
          colors={['#00000000', '#000000a0']}
          style={{padding: 5}}>
          <Text style={{color: 'white', fontSize: globalFont.H1}}>
            Simple Burger
          </Text>
          <View
            style={[GlobalStyles.inlineBox, {justifyContent: 'space-between'}]}>
            <Text style={{color: 'white'}}>Burger, Momos, FastFood</Text>
            <View
              style={[
                GlobalStyles.inlineBox,
                {
                  backgroundColor: colors.green,
                  padding: 5,
                  borderRadius: 8,
                },
              ]}>
              <Text style={{color: 'white'}}>4.1</Text>
              <Icon name="star" color={'white'} />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={[
          GlobalStyles.inlineBox,
          {justifyContent: 'space-between', padding: 5},
        ]}>
        <View>
          <Text>34min, 6km</Text>
        </View>
        <Text>$250 for one</Text>
      </View>
    </View>
  );
};

export default ItemCard;
