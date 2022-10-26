import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {Header, IconButton, FormInput} from '../../components';
import {images, COLORS, SIZES, FONTS, icons} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

DropDownPicker.setListMode('SCROLLVIEW');

const roomCode = [
  {id: 1, code: '1900', val: '1900'},
  {id: 2, code: '2100', val: '2100'},
  {id: 3, code: '3100', val: '3100'},
  {id: 4, code: '400', val: '400'},
  {id: 5, code: '1800', val: '1800'},
  {id: 6, code: '2800', val: '2800'},
  {id: 7, code: '3600', val: '3600'},
];

export default function GameLogin({navigation}) {
  const dropDownRef = React.useRef();
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [room, setRoom] = useState('1900');
  const [data, setData] = useState(roomCode);

  const nameInputHandle = enteredText => {
    setName(enteredText);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(false)}>
      <View style={styles.container}>
        <ImageBackground
          source={images.background_01}
          style={styles.backgroundImage}>
          <Header
            title="Vào chơi game"
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 20,
              paddingBottom: 17,
              paddingTop: 13,
            }}
            titleStyle={{color: COLORS.white, fontWeight: '700'}}
            rightComponent={
              <IconButton
                icon={icons.share}
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
                onPress={() => {}}
              />
            }
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
                onPress={() => {
                  navigation.goBack();
                }}
              />
            }
          />

          {/* Game Box */}
          <View style={styles.gameBox}>
            {/* Enter Name */}
            <FormInput
              containerStyle={{marginTop: 27, marginHorizontal: 20}}
              label="Nhập nick name"
              labelStyle={{fontWeight: '700', color: COLORS.black}}
              boxStyle={{borderWidth: 1, borderColor: '#E4E5ED'}}
              inputStyle={{
                ...FONTS.h3,
                paddingVertical: 10,
                paddingLeft: 12,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.base,
              }}
              placeholder="Nguyễn Văn A"
              placeholderTextColor={COLORS.gray}
              onChangeText={nameInputHandle}
              value={name}
              onFocus={() => {
                setOpen(false);
              }}
            />

            {/* Enter room */}
            <View style={{marginHorizontal: 20}}>
              <Text
                style={{
                  fontWeight: '700',
                  color: COLORS.black,
                  fontSize: 16,
                  marginTop: 24,
                  marginBottom: 5,
                }}>
                Chọn Phòng
              </Text>
              <DropDownPicker
                schema={{
                  label: 'code',
                  value: 'val',
                }}
                open={open}
                setOpen={setOpen}
                items={data}
                setItems={setData}
                value={room}
                setValue={setRoom}
                style={{
                  backgroundColor: COLORS.white,
                  borderWidth: 1,
                  borderColor: '#E4E5ED',
                }}
                textStyle={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: '600',
                  color: '#9093A0',
                }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#E4E5ED',
                  marginTop: 10,
                }}
                listMode="SCROLLVIEW"
              />
            </View>

            {/* Play game button */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeNavigation', {screen: 'GameQuiz'});
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
                <Text style={styles.text}>Vào Chơi Ngay</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: SIZES.width,
    flexDirection: 'column',
  },
  gameBox: {
    height: 'auto',
    width: 'auto',
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: SIZES.radius3,
    marginHorizontal: 20,
    marginTop: 56,
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 34,
    marginBottom: 42,
  },
  text: {
    ...FONTS.h3,
    fontWeight: '700',
    color: COLORS.white,
  },
});
