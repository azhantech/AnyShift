import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import MainContainer from '../../../../component/MainContainer';
import HalfHeader from '../../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import CustomButton from '../../../../component/Buttons/CustomButton';
import {generalImage, icons} from '../../../../assets/images';
import {vh} from '../../../../utils/dimensions';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import {colors} from '../../../../utils/appTheme';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import ScrollWrapper from '../../../../component/ScrollWrapper';

const ProfileScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = index => {
    setSelectedTab(index);
  };

  const renderProfile = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.profileImageViewStyle}>
          <Image style={styles.profileImageStyle} source={icons.profileImage} />
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
          onPress={() => navigation.navigate('EditProfileScreen')}
        />
      </View>
    );
  };

  const renderTitles = () => {
    return (
      <View style={styles.mainTitlesViewStyle}>
        <TouchableOpacity
          onPress={() => handleTabChange(0)}
          style={[
            styles.tabTitleViewStyle,
            {
              borderBottomWidth: selectedTab === 0 ? 0.2 * vh : 0,
              borderBottomColor: selectedTab === 0 ? colors.black : colors.grey,
            },
          ]}>
          <QanelasSemiBold
            style={[
              styles.tabTitleTextStyle,
              {
                color: selectedTab === 0 ? colors.black : colors.grey,
              },
            ]}>
            Personal Info
          </QanelasSemiBold>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    if (selectedTab == 0) {
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Profile Details
          </QanelasSemiBold>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                First Name
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                David
              </QanelasMedium>
            </View>

            <View style={styles.profileDetailsSubRowSecond}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Last Name
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                Harper
              </QanelasMedium>
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Email Address
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                david.harper@gmail.com
              </QanelasMedium>
            </View>

            <View style={styles.profileDetailsSubRowSecond}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Mobile Number
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                19159969739
              </QanelasMedium>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <MainContainer>
      <HalfHeader />
      {renderProfile()}
      {renderTitles()}
      <ScrollWrapper
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {renderContent()}
      </ScrollWrapper>
    </MainContainer>
  );
};

export default ProfileScreen;
