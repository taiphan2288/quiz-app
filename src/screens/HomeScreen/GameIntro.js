import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {images, COLORS, SIZES, FONTS, icons, gameData} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const GameIntro = ({navigation}) => {
  const {i18n, t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <ScrollView>
            <Text style={styles.textHeader}>Game Show: Hãy chọn giá đúng </Text>
            <Text style={styles.textTime}>
              {t('common:start')}: <Text style={{color: '#FF5254'}}>19h30</Text>
            </Text>
            <Text style={styles.author}>
              {t('common:author')}:{' '}
              <Text style={{color: '#FF5254'}}>Thanh Ngà</Text>
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={icons.close} />
        </TouchableOpacity>
      </View>

      {/* Desciption */}
      <View style={styles.descriptionContainer}>
        <ScrollView>
          <Text style={styles.descriptionHeader}>
            {t('common:introduction')}:
          </Text>
          <Text style={styles.textDescription} adjustsFontSizeToFit={true}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </Text>
        </ScrollView>
      </View>

      {/* Instruction */}
      <View style={styles.footer}>
        <ScrollView style={styles.instructionContainer}>
          <Text style={styles.instructionHeader}>
            {t('common:guidelines')}:
          </Text>
          <View style={styles.instructionContent}>
            <Text style={styles.instructionStep}>
              <Text style={{color: '#FF5254', fontWeight: '700'}}>B1: </Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text style={styles.instructionStep}>
              <Text style={{color: '#FF5254', fontWeight: '700'}}>B2: </Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text style={styles.instructionStep}>
              <Text style={{color: '#FF5254', fontWeight: '700'}}>B3: </Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.textBtnOut}>{t('common:close')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeNavigation', {screen: 'GameLogin'});
            }}
            style={{flex: 1}}>
            <LinearGradient
              colors={['#FF942D', '#F84273']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              locations={[-0.0273, 1]}
              useAngle={true}
              angle={134.33}
              angleCenter={{x: 0.5, y: 0.5}}
              style={[styles.linearGradientbtn, {borderRadius: SIZES.base}]}>
              <Text style={styles.textBtnLogin}>{t('common:play-now-2')}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingBottom: 24,
    height: 160,
  },
  header: {
    width: '60%',
  },
  textHeader: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#262634',
  },
  textTime: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: '#262634',
    marginTop: 16,
  },
  author: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: '#262634',
    marginTop: 16,
  },
  descriptionContainer: {
    marginTop: 8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'flex-start',
    height: 190,
  },
  descriptionHeader: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: '#262634',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  textDescription: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#63667D',
  },
  instructionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  instructionHeader: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: '#262634',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  instructionStep: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#63667D',
  },
  footer: {
    flex: 1,
    marginTop: 8,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  btnContainer: {
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  linearGradientbtn: {
    height: 'auto',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnOut: {
    ...FONTS.h3,
    fontWeight: '700',
    color: '#9093A0',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#9093A0',
    borderRadius: SIZES.base,
    paddingHorizontal: 20,
    marginRight: 20,
  },
  textBtnLogin: {
    ...FONTS.h3,
    fontWeight: '700',
    color: COLORS.white,
    paddingVertical: 12,
  },
});
