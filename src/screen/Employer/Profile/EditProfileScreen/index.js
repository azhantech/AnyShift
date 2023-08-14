import React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import HalfHeader from '../../../../component/HalfHeader';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {icons} from '../../../../assets/images';

const EditProfileScreen = ({navigation}) => {
  const profileData = [
    {
      id: 1,
      key: 'Name',
      value: 'David Harper',
      icon: icons.profile1,
      status: 'incomplete',
      onPress: () => navigation.navigate('UpdateNameScreen'),
    },
    {
      id: 2,
      key: 'Mobile Number',
      value: '19159969739',
      icon: icons.profile2,
      status: 'complete',
    },
    {
      id: 3,
      key: 'Email Address',
      value: 'david.harper@gmail.com',
      icon: icons.profile3,
      status: 'complete',
    },
    {
      id: 4,
      key: 'Change Password',
      icon: icons.profile4,
      status: 'empty',
      onPress: () => navigation.navigate('UpdatePasswordScreen'),
    },
  ];

  const handleStatusIcon = status => {
    if (status == 'incomplete') {
      return icons.incomplete;
    }

    if (status == 'complete') {
      return icons.complete;
    }

    if (status == 'empty') {
      return icons.empty;
    }
  };

  const renderProfile = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.profileImageViewStyle}>
          <Image style={styles.profileImageStyle} source={icons.profileImage} />

          <TouchableOpacity style={styles.camViewStyle}>
            <Image source={icons.cam} style={styles.onlineIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={item?.onPress}
        style={styles.mainButtonViewStyle}>
        <View style={styles.itemIconViewStyle}>
          <Image source={item?.icon} style={styles.itemIconStyle} />
        </View>

        <View style={styles.nameViewStyle}>
          <QanelasMedium style={styles.nameKeyStyle}>{item?.key}</QanelasMedium>
          {item?.value && (
            <QanelasMedium style={styles.nameValueStyle}>
              {item?.value}
            </QanelasMedium>
          )}
        </View>

        <View style={styles.statusButtonViewStyle(item?.status)}>
          <Image
            source={handleStatusIcon(item?.status)}
            style={styles.statusIconStyle(item?.status)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        data={profileData}
        renderItem={renderData}
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    );
  };

  return (
    <MainContainer>
      <HalfHeader />
      {renderProfile()}
      {renderFlatList()}
    </MainContainer>
  );
};

export default EditProfileScreen;
