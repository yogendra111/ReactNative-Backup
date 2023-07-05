import {Dimensions, PixelRatio} from 'react-native';

export const {height, width, fontScale} = Dimensions.get('window');
const isIos = Platform.OS == 'ios';

const convertFontScale = size => {
  const scale = width / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

export default StyleConfig = {
  isIos,
  convertFontScale: convertFontScale,
};

export const colors = {
  primaryColor: '#ff3300',
  'light-grey': '#ddd',
  grey: '#888',
  green: '#009933',
};

export const globalFont = {
  H1: convertFontScale(20),
  H2: convertFontScale(18),
  H3: convertFontScale(16),
  H4: convertFontScale(13),
  H5: convertFontScale(11.5),
  H6: convertFontScale(10),
  body: convertFontScale(13),
};

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
