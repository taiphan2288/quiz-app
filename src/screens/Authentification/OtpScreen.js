/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, IconButton, FormInput, TextButton} from '../../components';
import {images, SIZES, COLORS, icons, FONTS} from '../../constants';
import {useTranslation} from 'react-i18next';

const OtpScreen = ({navigation, route}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  let clockCall = null;
  const defaultCountdown = 30;
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);
  const {i18n, t} = useTranslation();

  // Update phone Number
  useEffect(() => {
    if (route.params?.phone) {
      setPhoneNumber(route.params?.phone);
    }
  }, [route.params?.phone]);

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  const optInputHandle = enteredText => {
    setOtp(enteredText);
  };

  const onSendOTP = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      setOtp('');
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  const renderHeader = () => {
    return (
      <Header
        title={t('common:loginTitle')}
        containerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}
        titleStyle={{color: COLORS.white, fontWeight: '600'}}
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
    );
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={images.background_01}
        style={styles.backgroundImage}>
        <SafeAreaView>
          {/* Render Header */}
          {renderHeader()}

          {/* Notification to phone */}
          <View style={{marginHorizontal: 20, marginTop: 33}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {t('common:please-enter-the-OTP-sent-to-you')}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {t('common:phone-number')}{' '}
              <Text style={{...FONTS.h3, color: COLORS.yellow}}>
                {phoneNumber}
              </Text>
            </Text>
          </View>

          {/* Form input OTP */}
          <FormInput
            containerStyle={{marginTop: 50, marginHorizontal: 20}}
            label={t('common:enter-otp')}
            labelStyle={{fontWeight: '700'}}
            inputStyle={{...FONTS.h3, paddingVertical: 10, paddingLeft: 12}}
            placeholder={t('common:please-enter-your-otp')}
            placeholderTextColor={COLORS.gray}
            onChangeText={optInputHandle}
            value={otp}
          />

          {/* Button */}
          <TextButton
            buttonContainerStyle={{
              backgroundColor: COLORS.lightYellow,
              marginHorizontal: 20,
              marginTop: SIZES.padding,
              borderRadius: SIZES.base,
            }}
            label={t('common:login')}
            labelStyle={{
              paddingVertical: 12,
              color: COLORS.primary,
              ...FONTS.h3,
              fontWeight: '700',
            }}
            onPress={() => navigation.navigate('Main')}
          />

          <View style={styles.bottomView}>
            <TouchableOpacity onPress={onSendOTP}>
              <View style={styles.btnResend}>
                <Text
                  style={[
                    styles.textResend,
                    {
                      color: COLORS.white,
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  {t('common:resend-otp')} ({countdown}s)
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: SIZES.padding,
  },
  btnResend: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textResend: {
    ...FONTS.h3,
    fontWeight: '700',
  },
});
