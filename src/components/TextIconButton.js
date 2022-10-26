import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS} from '../constants';

const TextIconButton = ({
  containerStyle,
  iconLeft,
  iconLeftStyle,
  iconRight,
  iconRightStyle,
  label,
  labelStyle,
  onPress,
  iconPositionLeft,
  iconPositionRight,
  containerStyleLeft,
  prependLeftComponent,
  appendLeftComponent,
  containerStyleRight,
  prependRightComponent,
  appendRightComponent,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Icon left */}
      {iconPositionLeft === 'LEFT' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            ...containerStyleLeft,
          }}>
          {prependLeftComponent}
          <Image
            source={iconLeft}
            style={{
              ...styles.image,
              ...iconLeftStyle,
            }}
          />
          {appendLeftComponent}
        </View>
      )}
      {/* Text */}
      <Text style={{...FONTS.h3, ...labelStyle}}>{label}</Text>
      {/* Icon right */}
      {iconPositionRight === 'RIGHT' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            ...containerStyleRight,
          }}>
          {prependRightComponent}
          <Image
            source={iconRight}
            style={{
              ...styles.image,
              ...iconRightStyle,
            }}
          />
          {appendRightComponent}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
});
