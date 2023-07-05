import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';
import {width} from '../StyleConfig';

const offers = [
  {
    id: 1,
    imageURI:
      'https://imgs.search.brave.com/j14h3d2d_ovyfsVr32VHUzWd19vPze38IM2uvX-krWE/rs:fit:568:946:1/g:ce/aHR0cHM6Ly9uZXdz/cGFwZXJhZHMuYWRz/MnB1Ymxpc2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA2L29yZGVyLW9u/bGluZS1vbi16b21h/dG8tdGhlLW5hdGlv/bi1ub3cta25vd3Mt/YWQtdGltZXMtb2Yt/aW5kaWEtYmFuZ2Fs/b3JlLTI0LTA1LTIw/MTkucG5n',
  },
  {
    id: 2,
    imageURI:
      'https://imgs.search.brave.com/Cx3SEV94rn0LMoRHVm_wdityLJ9tNyB_jVCCWWN80dQ/rs:fit:633:880:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL21l/ZGlhL0NHWng1RzhX/b0FBdmMyNC5wbmc',
  },
];

const CardSlider = ({style}) => {
  return (
    <FlatList
      data={offers}
      renderItem={({item}) => {
        return (
          <Image
            source={{
              uri: item.imageURI,
            }}
            style={{
              width: width / 2.5,
              height: width / 2,
              borderRadius: 15,
            }}
          />
        );
      }}
      horizontal
      ItemSeparatorComponent={<View style={{width: 10}} />}
      style={style}
    />
  );
};

export default CardSlider;
