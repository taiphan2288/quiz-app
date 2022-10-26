import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {Header, IconButton, FormInput} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

const EditScreen = ({navigation}) => {
  const {i18n, t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('+84 98.323.4354');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameInputHandle = enteredText => {
    setName(enteredText);
  };
  const emailInputHandle = enteredText => {
    setEmail(enteredText);
  };

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
          title={t('common:edit-information')}
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

      <ScrollView>
        {/* Phone Number */}
        <FormInput
          containerStyle={{marginTop: 50, marginHorizontal: 20}}
          label={t('common:phoneNumber')}
          labelStyle={{fontWeight: '700', color: COLORS.black}}
          inputStyle={{
            ...FONTS.h3,
            paddingVertical: 10,
            paddingLeft: 12,
            backgroundColor: '#E4E5ED',
            borderRadius: SIZES.base,
          }}
          placeholder={phoneNumber}
          placeholderTextColor={COLORS.black}
          disabled={false}
          editable={false}
        />

        {/* Edit name */}
        <FormInput
          containerStyle={{marginTop: 27, marginHorizontal: 20}}
          label={t('common:full-name')}
          labelStyle={{fontWeight: '700', color: COLORS.black}}
          inputStyle={{
            ...FONTS.h3,
            paddingVertical: 10,
            paddingLeft: 12,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.base,
          }}
          placeholder={t('common:full-name')}
          placeholderTextColor={COLORS.gray}
          onChangeText={nameInputHandle}
          value={name}
        />

        {/* Email */}
        <FormInput
          containerStyle={{marginTop: 27, marginHorizontal: 20}}
          label="Email"
          labelStyle={{fontWeight: '700', color: COLORS.black}}
          inputStyle={{
            ...FONTS.h3,
            paddingVertical: 10,
            paddingLeft: 12,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.base,
          }}
          placeholder="Email"
          placeholderTextColor={COLORS.gray}
          onChange={emailInputHandle}
          value={email}
        />
      </ScrollView>

      <TouchableOpacity
        style={{marginHorizontal: 20, marginBottom: 24}}
        onPress={() => {
          setName('');
          setEmail('');
          Alert.alert('Profile has been updated');
        }}>
        <LinearGradient
          colors={['#FF942D', '#F84273']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          locations={[-0.0273, 1]}
          useAngle={true}
          angle={134.33}
          angleCenter={{x: 0.5, y: 0.5}}
          style={[styles.linearGradient, {borderRadius: SIZES.base}]}>
          <Text style={styles.text}>{t('common:save')}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

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
    fontWeight: '700',
    color: COLORS.white,
    paddingVertical: 10,
  },
});
