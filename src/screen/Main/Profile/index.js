import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import CustomButton from '../../../component/Buttons/CustomButton';
import {generalImage, icons} from '../../../assets/images';
import {AirbnbRating} from 'react-native-ratings';
import {vh} from '../../../utils/dimensions';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import {colors} from '../../../utils/appTheme';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import ScrollWrapper from '../../../component/ScrollWrapper';

const Profile = ({navigation}) => {
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
            source={icons.profileImage}
          />

          <Image source={icons.online} style={styles.onlineIconStyle} />
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
          onPress={() => navigation.navigate('EditProfile')}
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

        <TouchableOpacity
          onPress={() => handleTabChange(1)}
          style={[
            styles.tabTitleViewStyle,
            {
              borderBottomWidth: selectedTab === 1 ? 0.2 * vh : 0,
              borderBottomColor: selectedTab === 1 ? colors.black : colors.grey,
            },
          ]}>
          <QanelasSemiBold
            style={[
              styles.tabTitleTextStyle,
              {
                color: selectedTab === 1 ? colors.black : colors.grey,
              },
            ]}>
            Biography
          </QanelasSemiBold>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleTabChange(2)}
          style={[
            styles.tabTitleViewStyle,
            {
              borderBottomWidth: selectedTab === 2 ? 0.2 * vh : 0,
              borderBottomColor: selectedTab === 2 ? colors.black : colors.grey,
            },
          ]}>
          <QanelasSemiBold
            style={[
              styles.tabTitleTextStyle,
              {
                color: selectedTab === 2 ? colors.black : colors.grey,
              },
            ]}>
            Bank Info
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
            Personal Information
          </QanelasSemiBold>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                First Name
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                James
              </QanelasMedium>
            </View>

            <View style={styles.profileDetailsSubRowSecond}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Last Name
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                Milner
              </QanelasMedium>
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Nick Name
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                Jimmy
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

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Email Address
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                james.milner@gmail.com
              </QanelasMedium>
            </View>

            <View style={styles.profileDetailsSubRowSecond}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Date of Birth
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                30 June 1999
              </QanelasMedium>
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                ID Card Front
              </QanelasSemiBold>

              <Image
                source={generalImage.placeholderImage}
                style={styles.placeHolderImageStyle}
              />
            </View>

            <View style={styles.profileDetailsSubRowSecond}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                ID Card Back
              </QanelasSemiBold>

              <Image
                source={generalImage.placeholderImage}
                style={styles.placeHolderImageStyle}
              />
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Are you a Student{' '}
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                Yes{' '}
              </QanelasMedium>
            </View>

            <View style={styles.profileDetailsSubRowSecond}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Highest Degree{' '}
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                Professional Bachelor (PBA){' '}
              </QanelasMedium>
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Address
              </QanelasSemiBold>

              <QanelasMedium style={styles.bankInfoValueStyle}>
                Frankfurter Alee Berlin, Germany
              </QanelasMedium>
            </View>
          </View>

          <View style={styles.mainDetailsRowViewStyle}>
            <View style={styles.profileDetailsSubRowOne}>
              <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                Location
              </QanelasSemiBold>

              <Image
                source={generalImage.horizontalMap}
                style={styles.mapImageStyle}
              />
            </View>
          </View>
        </View>
      );
    }
    if (selectedTab == 1) {
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Biography
          </QanelasSemiBold>
          <QanelasRegular style={styles.contentDescriptionStyle}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </QanelasRegular>

          <QanelasRegular style={styles.contentDescriptionStyle}>
            Sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </QanelasRegular>

          <QanelasRegular style={styles.contentDescriptionStyle}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat sed diam
          </QanelasRegular>
        </View>
      );
    }

    if (selectedTab == 2) {
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Bank Information
          </QanelasSemiBold>

          <View style={styles.bankSubInfoViewStyle}>
            <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
              Account holder name
            </QanelasSemiBold>

            <QanelasMedium style={styles.bankInfoValueStyle}>
              James Milner
            </QanelasMedium>
          </View>

          <View style={styles.bankSubInfoViewStyle}>
            <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
              IBAN Number
            </QanelasSemiBold>

            <QanelasMedium style={styles.bankInfoValueStyle}>
              ES2820958297603648596978
            </QanelasMedium>
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

export default Profile;
