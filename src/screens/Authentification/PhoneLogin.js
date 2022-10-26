import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, IconButton, FormInput, TextButton} from '../../components';
import {
  images,
  COLORS,
  SIZES,
  FONTS,
  icons,
  CountryCode,
} from '../../constants';
import {useTranslation} from 'react-i18next';

const getDropdownStyle = y => ({...styles.countryDropdown, top: y + 80});

const PhoneLogin = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode?.find(country => country.code === 'VN'),
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputsContainerY, setInputsContainerY] = useState(0);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const {i18n, t} = useTranslation();

  const closeDropdown = (pageX, pageY) => {
    if (isDropdownOpen) {
      if (
        pageX < dropdownLayout?.x ||
        pageX > dropdownLayout?.x + dropdownLayout?.width ||
        pageY < dropdownLayout?.y ||
        pageY > dropdownLayout?.y + dropdownLayout?.height
      ) {
        setIsDropdownOpen(false);
      }
    }
  };

  const phoneInputHandle = enteredText => {
    setPhoneNumber(enteredText);
  };

  const formatPhone = phone => {
    if (phone !== '') {
      const myPhone = phone.match(/(\d)/g).join(``);
      if (myPhone.length === 9) {
        return myPhone.replace(/(\d{2})(\d{3})(\d{4})/, `$1.$2.$3`);
      } else if (myPhone.length === 10) {
        return myPhone.replace(/(\d{3})(\d{3})(\d{4})/, `$1.$2.$3`);
      } else if (myPhone.length === 11) {
        return myPhone.replace(/(\d{3})(\d{3})(\d{5})/, `$1.$2.$3`);
      }
    } else {
      return ``;
    }
  };

  // Header
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
    <ImageBackground
      source={images.background_01}
      style={styles.backgroundImage}
      onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) =>
        closeDropdown(pageX, pageY)
      }>
      <SafeAreaView>
        {/* Render Header */}
        {renderHeader()}

        {/* Phone Input */}
        <FormInput
          containerStyle={{
            marginHorizontal: 20,
            marginTop: 40,
          }}
          label={t('common:phoneNumber')}
          labelStyle={{fontWeight: '700'}}
          onFocus={() => setIsDropdownOpen(false)}
          onChangeText={phoneInputHandle}
          value={phoneNumber}
          prependComponent={
            <TouchableOpacity
              style={styles.countryListContainer}
              onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Text style={styles.countryCodeText}>
                {selectedCountry.code}({selectedCountry.dial_code})
              </Text>
              <Image source={icons.arrow_down} style={{}} />
            </TouchableOpacity>
          }
          inputStyle={{paddingVertical: 10, ...FONTS.h3, fontWeight: '500'}}
          placeholder={t('common:phoneEner')}
          placeholderTextColor={COLORS.gray}
          keyboardType="number-pad"
          onLayout={({
            nativeEvent: {
              layout: {y},
            },
          }) => {
            // console.log(y);
            setInputsContainerY(y);
          }}
        />
        {isDropdownOpen && (
          <View
            style={getDropdownStyle(inputsContainerY)}
            onLayout={({
              nativeEvent: {
                layout: {x, y, height, width},
              },
            }) => setDropdownLayout({x, y, height, width})}>
            <FlatList
              data={CountryCode}
              keyExtractor={item => item.code}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => {
                      // console.log(item);
                      setSelectedCountry(item);
                      setIsDropdownOpen(false);
                    }}>
                    <Text style={styles.countryText}>{item.code}</Text>
                    <Text style={styles.countryText}>({item.dial_code})</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}

        {/* Button */}
        <TextButton
          buttonContainerStyle={{
            backgroundColor: COLORS.lightYellow,
            marginHorizontal: 20,
            marginTop: SIZES.padding,
            borderRadius: SIZES.base,
          }}
          label={t('common:getCode')}
          labelStyle={{
            paddingVertical: 12,
            color: COLORS.primary,
            ...FONTS.h3,
            fontWeight: '700',
          }}
          onPress={() => {
            navigation.navigate('Auth', {
              screen: 'OTP',
              params: {
                phone:
                  selectedCountry?.dial_code + ' ' + formatPhone(phoneNumber),
              },
            });
            setPhoneNumber('');
          }}
          activeOpacity={0.8}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PhoneLogin;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  countryListContainer: {
    backgroundColor: '#F8F9FA',
    width: 110,
    marginRight: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: SIZES.base,
    borderBottomLeftRadius: SIZES.base,
    borderRightWidth: 1,
    borderColor: '#E4E5ED',
    paddingHorizontal: 5,
  },
  countryCodeText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.gray,
  },
  countryDropdown: {
    backgroundColor: '#F8F9FA',
    position: 'absolute',
    width: (30 / 100) * SIZES.width,
    height: (40 / 100) * SIZES.height,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#E4E5ED',
    zIndex: 3,
  },
  countryItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  countryText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.gray,
  },
});
