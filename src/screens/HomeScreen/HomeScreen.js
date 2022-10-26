import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {images, COLORS, SIZES, FONTS, icons, gameData} from '../../constants';
import {VerticalCard} from '../../components';
import {useTranslation} from 'react-i18next';

const listTab = [
  {
    status: 'All',
    name: 'allGames',
  },
  {
    status: 'Hot',
    name: 'hotGames',
  },
];

const HomeScreen = ({navigation}) => {
  const {i18n, t} = useTranslation();
  const [status, setStatus] = useState('All');
  const [data, setData] = useState(gameData);
  const setStatusFilter = state => {
    if (state !== 'All') {
      setData([...data.filter(e => e.isHot === true)]);
    } else {
      setData([...gameData]);
    }
    setStatus(state);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{t('common:list-of-all-games')}</Text>
      </View>
      <View style={styles.listTab}>
        {listTab.map((e, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}>
              {t(`common:${e.name}`)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 14,
          paddingBottom: 34,
          paddingHorizontal: 16,
        }}
        numColumns={2}
        data={data}
        keyExtractor={(e, i) => i.toString()}
        renderItem={({item, index}) => {
          return (
            <VerticalCard
              item={item}
              index={index}
              onPress={() =>
                navigation.navigate('HomeNavigation', {screen: 'GameIntro'})
              }
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
  },
  textHeader: {
    fontSize: 20,
    lineHeight: 25,
    color: '#262634',
    fontWeight: '600',
    textAlign: 'center',
  },
  listTab: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  btnTab: {
    width: SIZES.width / 2,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
  btnTabActive: {
    borderBottomWidth: 1,
    borderBottomColor: '#FF5254',
  },
  textTabActive: {
    color: '#FF5254',
  },
});
