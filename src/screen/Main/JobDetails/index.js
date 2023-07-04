import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import {generalImage, icons} from '../../../assets/images';
import {vh} from '../../../utils/dimensions';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import {colors} from '../../../utils/appTheme';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import ScrollWrapper from '../../../component/ScrollWrapper';
import {jobDetails, shifts} from '../../../utils/tempData';
import {AirbnbRating} from 'react-native-ratings';
import CustomButton from '../../../component/Buttons/CustomButton';
import {reviews} from '../../../utils/tempData';
import ReviewItem from '../../../component/ReviewItem';
import ShiftItem from '../../../component/ShiftItem';

const JobDetails = ({navigation, route}) => {
  const status = route?.params?.status;
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = index => {
    setSelectedTab(index);
  };

  const handleStatusColor = () => {
    if (status == 'pending') {
      return colors.warningColor;
    }

    if (status == 'rejected') {
      return colors.primaryColor;
    }

    if (status == 'completed') {
      return colors.successColor;
    }

    if (status == 'in-progress') {
      return colors.inProgress;
    }

    if (status == 'paid') {
      return colors.highlightedText;
    }

    return colors.darkGray;
  };
  const renderProfile = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.profileImageViewStyle}>
          <Image style={styles.profileImageStyle} source={icons.amazon} />
          <View style={styles.statusMainContainerStyle}>
            <View style={styles.heartViewStyle}>
              <Image source={icons.heart} style={styles.onlineIconStyle} />
            </View>

            <View
              style={[
                styles.statusViewStyle,
                {
                  backgroundColor: handleStatusColor(),
                },
              ]}>
              <QanelasSemiBold style={styles.statusTextStyle}>
                {status}
              </QanelasSemiBold>
            </View>
          </View>
        </View>

        <QanelasBold style={styles.titleTextStyle}>Counter Cashier</QanelasBold>

        <View style={styles.locationViewStyle}>
          <Image source={icons.location} style={styles.locationIconStyle} />

          <QanelasMedium style={styles.locationTextStyle}>Texas</QanelasMedium>
        </View>

        <QanelasBold style={styles.daysTextStyle}>$100/6days</QanelasBold>
        <QanelasBold style={styles.daysAgoTextStyle}>2 days ago</QanelasBold>
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
            Job
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
            Customer
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
            Shifts{' '}
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
            Job Description{' '}
          </QanelasSemiBold>

          <QanelasRegular style={styles.contentDescriptionStyle}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
            minonumy eirmod tempor invidunt ut labore et dolore magna ali quyam
            erat, sed diam voluptua.
          </QanelasRegular>

          {jobDetails?.map((item, index) => (
            <View style={styles.jobPointsViewStyle}>
              <View style={styles.bulletViewStyle} />
              <View style={styles.bulletTextViewStyle}>
                <QanelasRegular style={styles.descriptionTextStyle}>
                  {item?.description}
                </QanelasRegular>
              </View>
            </View>
          ))}

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
                ID Card Front
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
        <View style={styles.customerContentContainerStyle}>
          <QanelasBold style={styles.titleTextStyle}>Amazon</QanelasBold>
          <AirbnbRating
            isDisabled={true}
            count={5}
            defaultRating={3}
            size={3 * vh}
            showRating={false}
          />
          <QanelasRegular style={styles.customerContentDescriptionStyle}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
            minonumy eirmod tempor invidunt ut labore et dolore magna ali quyam
            erat, sed diam voluptua.
          </QanelasRegular>
          <CustomButton
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            text="Visit Website"
          />

          <View style={styles.breakerViewStyle} />

          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Candidate Reviews
          </QanelasSemiBold>

          {reviews?.map((item, index) => (
            <ReviewItem item={item} />
          ))}
        </View>
      );
    }

    if (selectedTab == 2) {
      return (
        <View style={styles.mainContentContainerStyle}>
          <QanelasSemiBold style={styles.contentHeadingStyle}>
            Shifts
          </QanelasSemiBold>

          {shifts?.map((item, index) => (
            <ShiftItem item={item} />
          ))}

          <CustomButton
            style={styles.rateButtonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => navigation.navigate('GiveReview')}
            text="Give Rate and Review"
          />
        </View>
      );
    }
  };

  const renderShowInterest = () => {
    if (status == 'in-progress' || status == 'paid') {
      if (selectedTab == 0) {
        return (
          <TouchableOpacity style={styles.showInterestButtonStyle}>
            <QanelasMedium style={styles.textButtonStyle}>
              Show Interest
            </QanelasMedium>

            <Image style={styles.heartIconStyle} source={icons.heartFilled} />
          </TouchableOpacity>
        );
      }
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
      {renderShowInterest()}
    </MainContainer>
  );
};

export default JobDetails;
