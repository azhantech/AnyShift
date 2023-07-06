import React from 'react';
import {View, FlatList} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {planning} from '../../../utils/tempData';
import PlanningItem from '../../../component/PlanningItem';

const Planning = ({navigation}) => {
  
  const renderItem = ({item}) => {
    return <PlanningItem
    onPress={() => navigation.navigate('VacancyJobDetails')}
    item={item} 
    />;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Vacancies Available
        </QanelasMedium>
      </View>
    );
  };
  return (
    <MainContainer>
      <FlatList
        data={planning}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default Planning;
