import React from 'react';
import {View, FlatList} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {applicaitons} from '../../../utils/tempData';
import ApplicationItem from '../../../component/ApplicationItem';

const Applications = ({navigation}) => {
  const renderItem = ({item}) => {
    return <ApplicationItem item={item} onPress={() => navigation.navigate('JobDetails', {
      status: item?.status
    })}/>;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Applications Found
        </QanelasMedium>
      </View>
    );
  };
  const renderList = () => {
    return (
      <FlatList
        data={applicaitons}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
      />
    );
  };
  return <MainContainer>{renderList()}</MainContainer>;
};

export default Applications;
