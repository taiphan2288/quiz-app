import React from 'react';
import {
  View,
  Text,
  Image,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const VerticalCard = ({containerStyle, imageStyle, item, index, onPress}) => {
  return (
    <TouchableOpacity key={index} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.card}>
        {item.isHot ? (
          <Image
            source={icons.hot}
            style={{
              position: 'absolute',
              zIndex: 2,
              top: 4,
              left: 4,
            }}
          />
        ) : null}
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 120,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            alignSelf: 'flex-start',
          }}
          resizeMode="cover"
        />
        <View style={styles.cardInfo}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 14,
              lineHeight: 17,
              color: '#262634',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 15,
              color: '#9093A0',
              fontWeight: '600',
              marginTop: 4,
            }}>
            Bắt đầu:{' '}
            <Text
              style={{
                color: '#FF5254',
              }}>
              {item.time}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 190,
    backgroundColor: '#fff',
    width: 163,
    marginHorizontal: 2,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardInfo: {
    width: '100%',
    paddingLeft: 8,
    paddingTop: 4,
  },
});

export default VerticalCard;
