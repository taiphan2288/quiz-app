import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FONTS, SIZES, COLORS} from '../constants';

const ButtonGradient = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={['#FF942D', '#F84273']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[-0.0273, 1]}
        useAngle={true}
        angle={134.33}
        angleCenter={{x: 0.5, y: 0.5}}
        style={styles.linearGradient}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonGradient;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 'auto',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: SIZES.base,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
  },
  label: {
    color: COLORS.white,
    ...FONTS.h3,
    fontWeight: '700',
  },
});
