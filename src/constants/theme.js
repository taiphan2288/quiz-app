import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FF5254',
  orange: '#FFA133',
  yellow: '#FFD12F',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  lightYellow: '#FFF6D9',
  green: '#27AE60',
  red: '#FF1717',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#9093A0',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',

  text: '#63667D',
  header: ' #262634',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius1: 12,
  radius2: 16,
  radius3: 20,
  padding: 24,

  // font sizes
  h1: 22,
  h2: 20,
  h3: 16,
  h4: 14,
  h5: 13,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h1, lineHeight: 33},
  h2: {fontFamily: 'Quicksand-Bold', fontSize: SIZES.h2, lineHeight: 25},
  h3: {fontFamily: 'Quicksand-SemiBold', fontSize: SIZES.h3, lineHeight: 24},
  h4: {fontFamily: 'Quicksand-Medium', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Quicksand-SemiBold', fontSize: SIZES.h5, lineHeight: 17},
};

const theme = {COLORS, SIZES, FONTS};

export default theme;
