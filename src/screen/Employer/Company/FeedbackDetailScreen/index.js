import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import MainContainer from '../../../../component/MainContainer';
import HalfHeader from '../../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import {generalImage, icons} from '../../../../assets/images';
import {vh, vw} from '../../../../utils/dimensions';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import {colors} from '../../../../utils/appTheme';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import ScrollWrapper from '../../../../component/ScrollWrapper';
import {jobDetails, shifts} from '../../../../utils/tempData';
import CustomButton from '../../../../component/Buttons/CustomButton';
import {reviews} from '../../../../utils/tempData';
import ReviewItem from '../../../../component/ReviewItem';
import ShiftItem from '../../../../component/ShiftItem';
import ConfirmationModal from '../../../../component/ModalMessages/ConfirmationModal';
import InputField from '../../../../component/Inputs/InputField';

const FeedbackDetailScreen = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);

  const handleTabChange = index => {
    setSelectedTab(index);
  };

  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };

  const handleFav = () => {
    setIsFavourite(!isFavourite);
  };

  const renderProfile = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.profileImageViewStyle}>
          <Image
            style={styles.profileImageStyle}
            source={generalImage.profile}
          />
          <View style={styles.statusMainContainerStyle}>
            <TouchableOpacity onPress={handleFav} style={styles.heartViewStyle}>
              <Image
                source={icons.heartFilled}
                style={styles.onlineIconStyle(isFavourite)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <QanelasBold style={styles.titleTextStyle}>James Milner</QanelasBold>
        <QanelasSemiBold style={styles.profession}>Student</QanelasSemiBold>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.customerContentContainerStyle}>
        <QanelasRegular style={styles.customerContentDescriptionStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          minonumy eirmod tempor invidunt ut labore et dolore magna ali quyam
          erat, sed diam voluptua.
        </QanelasRegular>
        <QanelasRegular style={styles.customerContentDescriptionStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          minonumy eirmod tempor invidunt ut labore et dolore magna ali quyam
          erat, sed diam voluptua.
        </QanelasRegular>

        <TouchableOpacity style={styles.chatButton}>
          <QanelasMedium style={styles.chatText}>Chat</QanelasMedium>
          <Image source={icons.tab4} style={styles.chatIcon} />
        </TouchableOpacity>

        <View style={styles.breakerViewStyle} />

        <View style={styles.hourContainer}>
          <QanelasBold style={styles.date}>Monday 15 May, 2023</QanelasBold>
          <QanelasRegular style={styles.text}>
            Planned Hours: 12:00 - 21:00
          </QanelasRegular>
          <QanelasRegular style={styles.text}>
            Working Hours: 12:00 - 21:00
          </QanelasRegular>
        </View>

        <View style={styles.hourContainer}>
          <QanelasBold style={styles.date}>Monday 15 May, 2023</QanelasBold>
          <QanelasRegular style={styles.text}>
            Planned Hours: 12:00 - 21:00
          </QanelasRegular>
          <QanelasRegular style={styles.text}>
            Working Hours: 12:00 - 21:00
          </QanelasRegular>
        </View>

        <View style={styles.rateContainer}>
          <QanelasBold style={styles.rateHeading}>Rate Employee</QanelasBold>
          <AirbnbRating
            count={5}
            defaultRating={0}
            size={3 * vh}
            showRating={false}
            starContainerStyle={{marginTop: vh * 1}}
          />
        </View>

        <InputField
          inputContainerIcon={{height: vh * 15, width: vw * 90}}
          inputContainer={{height: '100%'}}
          multiline={true}
          label="Write Review"
          required
        />

        <CustomButton
          text="Submit"
          onPress={() => props?.navigation.navigate('DrawerNavigator')}
          style={{alignSelf: 'center', marginTop: vh * 2}}
        />
      </View>
    );
  };

  return (
    <MainContainer style={{backgroundColor: colors.white}}>
      <HalfHeader />
      {renderProfile()}
      {/* {renderTitles()} */}
      <ScrollWrapper
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {renderContent()}
      </ScrollWrapper>

      <ConfirmationModal
        visible={cancelReasonModal}
        onPress={onHandleCancelReasonModal}
        onHide={onHandleCancelReasonModal}
        yesbuttonTitle="Yes"
        nobuttonTitle="No"
        icon={icons.warning}
        firstDescription="Apply for Job"
        placeholder="Are you sure you want to apply for job?"
      />
    </MainContainer>
  );
};

export default FeedbackDetailScreen;