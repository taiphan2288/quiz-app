/* eslint-disable prettier/prettier */
import React, {FunctionComponent} from 'react';
import {
  ViewStyle,
  ImagePropTypes,
  TouchableOpacity,
  Image,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import {COLORS} from '../constants';

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image
        source={icon}
        style={{width: 30, height: 30, tintColor: COLORS.white, ...iconStyle}}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
