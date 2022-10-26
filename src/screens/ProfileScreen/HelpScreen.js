import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, icons} from '../../constants';
import {Header, IconButton} from '../../components';
import {useTranslation} from 'react-i18next';

const HelpScreen = ({navigation}) => {
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
          title={t('common:help')}
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
    </View>
  );
};

export default HelpScreen;

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
});
