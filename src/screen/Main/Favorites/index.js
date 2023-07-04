import React from 'react';
import {View, FlatList} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {favorites} from '../../../utils/tempData';
import VacancyItem from '../../../component/VacancyItem';

const Favorites = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <VacancyItem
        onPress={() => navigation.navigate('VacancyJobDetails')}
        item={item}
      />
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Favorites Available
        </QanelasMedium>
      </View>
    );
  };
  return (
    <MainContainer>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default Favorites;
