import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../constants';

export default function TextButton({
  label,
  label2,
  labelStyle2,
  labelStyle,
  buttonContainerStyle,
  onPress,
  disabled,
  activeOpacity,
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...buttonContainerStyle,
      }}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}>
      <Text style={{...FONTS.h3, ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
}
