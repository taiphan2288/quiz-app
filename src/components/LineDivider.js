import React from 'react';
import {StyleSheet, View} from 'react-native';

const LineDivider = ({lineStyle}) => {
  return <View style={[styles.container, {...lineStyle}]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 2,
  },
});

export default LineDivider;
