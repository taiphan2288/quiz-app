import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useContext} from 'react';
import {images, COLORS, SIZES, FONTS, Languages} from '../../constants';
import {TextIconButton} from '../../components';
import {useTranslation} from 'react-i18next';
import AppContext from '../../context/AppContext';

const LoginScreen = ({navigation}) => {
  const {languageChanged, setLanguageChanged} = useContext(AppContext);
  const [select, setSelect] = useState(Languages);
  const {i18n, t} = useTranslation();

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };

  // const handleOnpress = item => {
  //   const newItem = select.map(value => {
  //     if (value.id === item.id) {
  //       return {...value, checked: true};
  //     } else {
  //       return {...value, checked: false};
  //     }
  //   });
  //   setLanguageChanged(newItem);
  // };

  console.log(languageChanged);
  return (
    <ImageBackground
      source={images.background_01}
      style={styles.backgroundImage}>
      <View style={styles.overlayView} />
      <View style={styles.languageBox}>
        <Text style={styles.header}>{t('common:languageSelector')}</Text>
        <FlatList
          data={select}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return (
              <TextIconButton
                containerStyle={styles.buttonItem}
                label={t(`common:${item.label}`)}
                labelStyle={{color: COLORS.text}}
                iconLeft={item.icon}
                iconLeftStyle={{marginRight: 8}}
                iconPositionLeft="LEFT"
                onPress={() => {
                  // handleOnpress(item);
                  setLanguage(item.code);
                  setLanguageChanged(item.code);
                  navigation.navigate('Auth', {screen: 'PhoneLogin'});
                }}
              />
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  overlayView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#262634',
    opacity: 0.5,
  },
  languageBox: {
    height: 220,
    width: '75%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: SIZES.radius3,
    // paddingHorizontal: 53,
  },
  header: {
    color: COLORS.header,
    textAlign: 'center',
    marginTop: 16,
    ...FONTS.h1,
  },
  buttonItem: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E4E5ED',
    borderRadius: SIZES.base,
    marginTop: SIZES.padding,
    marginHorizontal: 52,
    paddingHorizontal: 36,
  },
});
