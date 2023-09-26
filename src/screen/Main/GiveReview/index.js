import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import QanelasBold from '../../../component/Texts/QanelasBold';

import { applicaitons } from '../../../utils/tempData';
import ApplicationItem from '../../../component/ApplicationItem';
import { AirbnbRating } from 'react-native-ratings';
import ScrollWrapper from '../../../component/ScrollWrapper';
import { vh } from '../../../utils/dimensions';
import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';
import { useDispatch } from 'react-redux';
import { ReviewJobApplicationDetail } from '../../../redux/ApplicationSlice';
import { showMessage } from 'react-native-flash-message';

const GiveReview = ({ navigation, route }) => {
  const companyId = route?.params?.companyId
  const dispatch = useDispatch();
  const [comment, setComment] = useState(null)
  const [rating, setRating] = useState(3)

  const handleReviewJob = async () => {
    try {
      if (comment == null) {
        showMessage({
          message: 'Please write a review',
          type: 'danger'
        })
        return
      }
      const data = {
        companyId,
        comment,
        rating
      }
      const response = await dispatch(ReviewJobApplicationDetail(data))
      console.warn(response)
      if (response?.payload?.statusCode == 200) {
        showMessage({
          message: 'Review Posted Successfully',
          type: 'success'
        })
        navigation.goBack();
      }

    } catch (e) {
      showMessage({
        message: e,
        type: 'danger'
      })
    }
  }
  const renderReviews = () => {
    return (
      <View style={styles.mainContainerStyle}>
        {/* <QanelasBold style={styles.enterRatingTextStyle}>
          Enter Rating
        </QanelasBold>

        <AirbnbRating
          count={5}
          defaultRating={5}
          size={3 * vh}
          showRating={false}
        />
        <QanelasMedium style={styles.subHeadingTextStyle}>
          Work atmosphere
        </QanelasMedium>

        <AirbnbRating
          count={5}
          defaultRating={3}
          size={3 * vh}
          showRating={false}
        />
        <QanelasMedium style={styles.subHeadingTextStyle}>
          Respectfulness
        </QanelasMedium>

        <AirbnbRating
          count={5}
          defaultRating={3}
          size={3 * vh}
          showRating={false}
        />

        <QanelasMedium style={styles.subHeadingTextStyle}>
          Ease of access
        </QanelasMedium>


        <AirbnbRating
          count={5}
          defaultRating={3}
          size={3 * vh}
          showRating={false}
        />
        <QanelasMedium style={styles.subHeadingTextStyle}>
          Job pace
        </QanelasMedium> */}


        <QanelasBold style={styles.totalRatingTextStyle}>
          Total Rating
        </QanelasBold>
        <AirbnbRating
          count={5}
          defaultRating={3}
          size={3 * vh}
          showRating={false}
          onFinishRating={(rating) => setRating(rating)}
        />

        <InputField label="Write Review" required placeholder="Enter Review" value={comment} onChangeText={(text) => setComment(text)} />

        <CustomButton onPress={handleReviewJob} style={styles.sendButtonStyle} text="Send" />
      </View>
    );
  };
  return (
    <MainContainer>
      <ScrollWrapper avoidKeyboard>{renderReviews()}</ScrollWrapper>
    </MainContainer>
  );
};

export default GiveReview;
