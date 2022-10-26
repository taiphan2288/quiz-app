import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONTS} from '../constants';

const Header = ({
  title,
  containerStyle,
  leftComponent,
  rightComponent,
  titleStyle,
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* Left */}
      {leftComponent}
      {/* Title */}
      <View style={styles.containerTitle}>
        <Text style={[{...FONTS.h2, color: 'black'}, titleStyle]}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
