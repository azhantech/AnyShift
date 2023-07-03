import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import CustomButton from '../../../component/Buttons/CustomButton';
import {generalImage} from '../../../assets/images';
import {AirbnbRating} from 'react-native-ratings';
import {vh} from '../../../utils/dimensions';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import PagerView from 'react-native-pager-view';
import { colors } from '../../../utils/appTheme';
import ScrollWrapper from '../../../component/ScrollWrapper';

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

  const renderContent = () => {
    if(selectedTab == 1){
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Biography
          </QanelasSemiBold>

          <QanelasRegular style={styles.contentDescriptionStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.

          </QanelasRegular>

          <QanelasRegular style={styles.contentDescriptionStyle}>
          Sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

          </QanelasRegular>

          <QanelasRegular style={styles.contentDescriptionStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam
          </QanelasRegular>

        </View>
      )
    }
  }

  return (
    <MainContainer>
      <HalfHeader />
      {renderProfile()}
      {renderTitles()}
      {renderContent()}
    </MainContainer>
  );
};

export default Profile;
