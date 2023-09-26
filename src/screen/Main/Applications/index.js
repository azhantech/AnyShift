import React, { useLayoutEffect } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import { applicaitons } from '../../../utils/tempData';
import ApplicationItem from '../../../component/ApplicationItem';
import { icons } from '../../../assets/images';
import { getJobsApplication } from '../../../redux/ApplicationSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Applications = ({ navigation }) => {
  const dispatch = useDispatch();
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
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const getData = async () => {
    // try {
    const data = {
      startDate: '2023-08-13T17:05:07.6614223',
      endDate: '2023-09-09T17:05:07.6614223',
      status: 1,
      pageNo: pageNo,
      pageSize: pageSize,
    };
    await dispatch(getJobsApplication(data))
      .then(response => {
        setData(response?.payload?.jobApplications);
      })
      .catch(err => {
        console.log('Error from getJobs ==>', err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <ApplicationItem
        item={item}
        onPress={() =>
          navigation.navigate('JobDetails', {
            id: item?.id,
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
        data={data}
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
