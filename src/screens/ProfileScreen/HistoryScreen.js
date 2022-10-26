import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLORS,
  icons,
  images,
  SIZES,
  FONTS,
  HistoryData,
} from '../../constants';
import {Header, IconButton, LineDivider} from '../../components';
import {useTranslation} from 'react-i18next';

const HistoryScreen = ({navigation}) => {
  const [data, serData] = useState(HistoryData);
  const {i18n, t} = useTranslation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fb7b40', '#FA6E4A']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[-0.0273, 1]}
        useAngle={true}
        angle={134.33}
        angleCenter={{x: 0.5, y: 0.5}}
        style={styles.linearGradient}>
        <Header
          title={t('common:history')}
          containerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            paddingBottom: 17,
            paddingTop: 13,
          }}
          titleStyle={{color: COLORS.white, fontWeight: '700'}}
          leftComponent={
            <IconButton
              icon={icons.arrow_left}
              containerStyle={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              iconStyle={{
                width: 24,
                height: 24,
              }}
              onPress={() => navigation.goBack()}
            />
          }
          rightComponent={<View style={{width: 40}} />}
        />
      </LinearGradient>

      {/* Game's empty */}
      {!data ? (
        <View style={styles.gameEmpty}>
          <Image source={images.empty} />
          <Text style={styles.text}>Bạn chưa có lịch sử chơi game!</Text>
          <TouchableOpacity style={{marginTop: 34}}>
            <LinearGradient
              colors={['#FF942D', '#F84273']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              locations={[-0.0273, 1]}
              useAngle={true}
              angle={134.33}
              angleCenter={{x: 0.5, y: 0.5}}
              style={[styles.linearGradientbtn, {borderRadius: SIZES.base}]}>
              <Text style={styles.textbtn}>Chơi Game Ngay</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.gameList}>
          <View style={styles.headerList}>
            <View style={styles.headerName}>
              <Text style={styles.headerNumber}>#</Text>
              <Text style={styles.textHeader}>{t('common:game')}</Text>
            </View>
            <Text style={styles.headerAward}>{t('common:award')}</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
              return (
                <LineDivider
                  lineStyle={{
                    backgroundColor: '#E4E5ED',
                    marginHorizontal: 8,
                    borderRadius: SIZES.base,
                  }}
                />
              );
            }}
            renderItem={({item, index}) => {
              return (
                <View style={styles.gameItem}>
                  <View style={styles.gameName}>
                    <Text style={styles.textNumber}>{index + 1}</Text>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.textTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.dateTime}>
                        {item.time} | {item.date}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.award}>
                    {item.awards === '1' ? (
                      <Image source={icons.gold_medal} />
                    ) : item.awards === '2' ? (
                      <Image source={icons.silver_medal} />
                    ) : item.awards === '3' ? (
                      <Image source={icons.copper_medal} />
                    ) : (
                      <Text style={styles.textAward}>#{item.awards}</Text>
                    )}
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  linearGradient: {
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: '#63667D',
  },
  textbtn: {
    ...FONTS.h3,
    fontWeight: '700',
    color: COLORS.white,
    paddingVertical: 10,
  },
  linearGradientbtn: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  gameList: {
    flex: 1,
  },
  headerList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFF6D9',
  },
  headerNumber: {
    ...FONTS.h3,
    fontWeight: '700',
    color: COLORS.black,
    marginRight: 20,
  },
  headerName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAward: {
    width: 100,
    ...FONTS.h3,
    fontWeight: '700',
    color: COLORS.black,
    alignItems: 'center',
    textAlign: 'center',
  },
  textHeader: {
    ...FONTS.h3,
    fontWeight: '700',
    color: COLORS.black,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  gameName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  award: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAward: {
    color: '#FF5254',
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '700',
  },
  textTitle: {
    width: 200,
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  textNumber: {
    color: '#63667D',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginRight: 20,
  },
  dateTime: {
    fontSize: 12,
    color: '#63667D',
    lineHeight: 18,
    fontWeight: '500',
  },
});
