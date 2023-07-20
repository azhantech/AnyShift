import React, { useLayoutEffect } from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {applicaitons} from '../../../utils/tempData';
import ApplicationItem from '../../../component/ApplicationItem';
import {icons} from '../../../assets/images';

const Applications = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NotificationScreen');
              }}
              style={styles.textButton}>
              <Image
                source={icons.filter}
                style={styles.notificationsIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NotificationScreen');
              }}
              style={styles.textButton}>
              <Image
                source={icons.notification}
                style={styles.notificationsIconStyle}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  });

  const renderItem = ({item}) => {
    return (
      <ApplicationItem
        item={item}
        onPress={() =>
          navigation.navigate('JobDetails', {
            status: item?.status,
          })
        }
      />
    );
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
