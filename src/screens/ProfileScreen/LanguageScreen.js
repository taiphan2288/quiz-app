import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, Languages} from '../../constants';
import {Header, IconButton, LineDivider} from '../../components';
import AppContext from '../../context/AppContext';
import {useTranslation} from 'react-i18next';

const LanguageScreen = ({navigation}) => {
  const [select, setSelect] = useState(Languages);
  const {languageChanged, setLanguageChanged} = useContext(AppContext);
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
    <View style={styles.container}>
      {/* Header navaigation */}
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
          title={t('common:language')}
          containerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            paddingBottom: 17,
            paddingTop: 13,
          }}
          titleStyle={{
            color: COLORS.white,
            fontWeight: '700',
            textTransform: 'capitalize',
          }}
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

      <FlatList
        data={select}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => {
          return (
            <LineDivider
              lineStyle={{
                backgroundColor: '#E4E5ED',
                marginRight: 14,
                marginLeft: 23,
              }}
            />
          );
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                // handleOnpress(item);
                setLanguage(item.code);
                setLanguageChanged(item.code);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginTop: 12,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image source={item.icon} />
                  <Text style={styles.text}>{t(`common:${item.label}`)}</Text>
                </View>
                {item.code === languageChanged ? (
                  <Image source={icons.check} />
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LanguageScreen;

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
  text: {
    ...FONTS.h3,
    color: '#63667D',
    fontWeight: '600',
    paddingLeft: 16,
    paddingVertical: 12,
  },
});
