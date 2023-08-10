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
import CustomButton from '../../../../component/Buttons/CustomButton';
import {reviews} from '../../../../utils/tempData';
import ReviewItem from '../../../../component/ReviewItem';
import ConfirmationModal from '../../../../component/ModalMessages/ConfirmationModal';

const EmployeeDetailScreen = ({navigation, route}) => {
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
          <Image style={styles.profileImageStyle} source={icons.amazon} />
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
        <CustomButton
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          text="Chat"
        />

        <View style={styles.breakerViewStyle} />

        <QanelasSemiBold style={styles.contentHeadingStyle}>
          Reviews
        </QanelasSemiBold>

        {reviews?.map((item, index) => (
          <ReviewItem item={item} />
        ))}
      </View>
    );
  };

  return (
    <MainContainer>
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

export default EmployeeDetailScreen;
