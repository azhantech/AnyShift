import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import CustomButton from '../../../component/Buttons/CustomButton';
import {generalImage} from '../../../assets/images';
import {AirbnbRating} from 'react-native-ratings';
import {vh} from '../../../utils/dimensions';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import PagerView from 'react-native-pager-view';
import { colors } from '../../../utils/appTheme';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = index => {
    setSelectedTab(index);
  };
  const renderProfile = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.profileImageViewStyle}>
          <Image
            style={styles.profileImageStyle}
            source={generalImage.profilePlaceholder}
          />
        </View>

        <QanelasBold style={styles.titleTextStyle}>James Milner</QanelasBold>

        <AirbnbRating
          isDisabled={true}
          count={5}
          defaultRating={3}
          size={3 * vh}
          showRating={false}
        />
        <CustomButton
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          text="Edit Profile"
        />
      </View>
    );
  };

  const renderTitles = () => {
    return (
      <View style={styles.mainTitlesViewStyle}>
        <TouchableOpacity
          onPress={() => handleTabChange(0)}
          style={[styles.tabTitleViewStyle, {
            borderBottomWidth: selectedTab === 0 ? 0.2 * vh : 0,
            borderBottomColor: selectedTab === 0 ? colors.black : colors.grey,
          }]}>
          <QanelasSemiBold style={[styles.tabTitleTextStyle, {
            color: selectedTab === 0 ? colors.black : colors.grey,
          }]}>
            Personal Info
          </QanelasSemiBold>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabChange(1)}
          style={[styles.tabTitleViewStyle, {
            borderBottomWidth: selectedTab === 1 ? 0.2 * vh : 0,
            borderBottomColor: selectedTab === 1 ? colors.black : colors.grey,
          }]}>
          <QanelasSemiBold style={[styles.tabTitleTextStyle, {
            color: selectedTab === 1 ? colors.black : colors.grey,
          }]}>
            Biography
          </QanelasSemiBold>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabChange(2)}
          style={[styles.tabTitleViewStyle, {
            borderBottomWidth: selectedTab === 2 ? 0.2 * vh : 0,
            borderBottomColor: selectedTab === 2 ? colors.black : colors.grey,
          }]}>
          <QanelasSemiBold style={[styles.tabTitleTextStyle, {
            color: selectedTab === 2 ? colors.black : colors.grey,
          }]}>
            Bank Info
          </QanelasSemiBold>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <MainContainer>
      <HalfHeader />
      {renderProfile()}
      {renderTitles()}
    </MainContainer>
  );
};

export default Profile;
