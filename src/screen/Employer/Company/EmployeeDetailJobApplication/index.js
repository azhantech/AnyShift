import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import HalfHeader from '../../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import {icons} from '../../../../assets/images';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import ScrollWrapper from '../../../../component/ScrollWrapper';
import {reviews} from '../../../../utils/tempData';
import ReviewItem from '../../../../component/ReviewItem';
import ConfirmationModal from '../../../../component/ModalMessages/ConfirmationModal';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {colors} from '../../../../utils/appTheme';

const EmployeeDetailJobApplication = ({navigation, route}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);

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
          <Image style={styles.profileImageStyle} source={icons.profileImage} />
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

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.approveButton}>
            <QanelasMedium style={styles.buttonText}>Approve</QanelasMedium>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.approveButton,
              {backgroundColor: colors.primaryColor},
            ]}>
            <QanelasMedium style={styles.buttonText}>Reject</QanelasMedium>
          </TouchableOpacity>
        </View>

        <View style={styles.breakerViewStyle} />

        <View style={styles.item}>
          <QanelasBold style={styles.bigDate}>Monday 15 May, 2023</QanelasBold>
        </View>

        <View style={styles.item}>
          <QanelasSemiBold style={styles.heading}>
            Shift Charges
          </QanelasSemiBold>
          <QanelasMedium style={styles.itemValue}>$200</QanelasMedium>
        </View>

        <View style={styles.hourContainer}>
          <View>
            <QanelasSemiBold style={styles.heading}>From</QanelasSemiBold>
            <QanelasSemiBold style={styles.itemValue}>01:00 PM</QanelasSemiBold>
            <QanelasSemiBold style={styles.itemValue}>06:00 PM</QanelasSemiBold>
          </View>

          <View style={styles.leftContainer}>
            <QanelasSemiBold style={styles.heading}>To</QanelasSemiBold>
            <QanelasSemiBold style={styles.itemValue}>01:00 PM</QanelasSemiBold>
            <QanelasSemiBold style={styles.itemValue}>06:00 PM</QanelasSemiBold>
          </View>
        </View>

        <QanelasSemiBold style={styles.contentHeadingStyle}>
          Reviews
        </QanelasSemiBold>

        {reviews?.map((item, index) => (
          <ReviewItem item={item} key={index} />
        ))}
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

export default EmployeeDetailJobApplication;