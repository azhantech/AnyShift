import React from 'react';
import {View, Image} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import CustomButton from '../../../component/Buttons/CustomButton';
import {generalImage} from '../../../assets/images';
import {AirbnbRating} from 'react-native-ratings';
import {vh} from '../../../utils/dimensions';

const Profile = () => {
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
  return (
    <MainContainer>
      <HalfHeader />
      {renderProfile()}
    </MainContainer>
  );
};

export default Profile;
