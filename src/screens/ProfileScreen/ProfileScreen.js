import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons} from '../../constants';
import {TextIconButton, LineDivider} from '../../components';
import {useTranslation} from 'react-i18next';

export default function ProfileScreen({navigation}) {
  const {i18n, t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('+84 98.323.4354');

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
        <Text style={styles.header}>{t('common:account')}</Text>
        <Text style={styles.subHeader}>{phoneNumber}</Text>
      </LinearGradient>

      {/* Edit information */}
      <TextIconButton
        containerStyle={{
          marginLeft: 23,
          marginRight: 14,
          marginTop: 16,
          justifyContent: 'space-between',
        }}
        iconPositionLeft="LEFT"
        iconLeft={icons.edit}
        appendLeftComponent={
          <Text style={styles.text}>{t('common:edit-information')}</Text>
        }
        iconPositionRight="RIGHT"
        iconRight={icons.arrow_right}
        onPress={() =>
          navigation.navigate('ProfileNavigation', {screen: 'EditProfile'})
        }
      />

      {/* Game's history */}
      <TextIconButton
        containerStyle={{
          marginLeft: 23,
          marginRight: 14,
          marginTop: 16,
          justifyContent: 'space-between',
        }}
        iconPositionLeft="LEFT"
        iconLeft={icons.list_bullets}
        appendLeftComponent={
          <Text style={styles.text}>{t('common:game-history')}</Text>
        }
        iconPositionRight="RIGHT"
        iconRight={icons.arrow_right}
        onPress={() =>
          navigation.navigate('ProfileNavigation', {screen: 'HistoryScreen'})
        }
      />

      {/* Language */}
      <TextIconButton
        containerStyle={{
          marginLeft: 23,
          marginRight: 14,
          marginTop: 16,
          justifyContent: 'space-between',
        }}
        iconPositionLeft="LEFT"
        iconLeft={icons.globe}
        appendLeftComponent={
          <Text style={styles.text}>{t('common:language')}</Text>
        }
        iconPositionRight="RIGHT"
        iconRight={icons.arrow_right}
        onPress={() =>
          navigation.navigate('ProfileNavigation', {screen: 'LanguageScreen'})
        }
      />

      {/* helps */}
      <TextIconButton
        containerStyle={{
          marginLeft: 23,
          marginRight: 14,
          marginTop: 16,
          justifyContent: 'space-between',
        }}
        iconPositionLeft="LEFT"
        iconLeft={icons.chat}
        appendLeftComponent={
          <Text style={styles.text}>{t('common:help')}</Text>
        }
        iconPositionRight="RIGHT"
        iconRight={icons.arrow_right}
        onPress={() =>
          navigation.navigate('ProfileNavigation', {screen: 'HelpScreen'})
        }
      />

      {/* Line divider */}
      <LineDivider
        lineStyle={{
          backgroundColor: '#E4E5ED',
          marginTop: 24,
          marginRight: 14,
          marginLeft: 23,
        }}
      />

      {/* Log out */}
      <TextIconButton
        containerStyle={{
          marginLeft: 23,
          marginRight: 14,
          marginTop: 16,
        }}
        iconPositionLeft="LEFT"
        iconLeft={icons.log_out}
        appendLeftComponent={
          <Text style={styles.text}>{t('common:log-out')}</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: '700',
    paddingVertical: 12,
    textTransform: 'capitalize',
  },
  subHeader: {
    color: COLORS.white,
    fontSize: 28,
    lineHeight: 42,
    fontWeight: '700',
    paddingBottom: 24,
  },
  text: {
    ...FONTS.h3,
    color: '#63667D',
    fontWeight: '600',
    paddingLeft: 16,
    paddingVertical: 12,
  },
});
