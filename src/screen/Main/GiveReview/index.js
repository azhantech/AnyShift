import React from 'react';
import {View, FlatList} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import QanelasBold from '../../../component/Texts/QanelasBold';

import {applicaitons} from '../../../utils/tempData';
import ApplicationItem from '../../../component/ApplicationItem';
import {AirbnbRating} from 'react-native-ratings';
import ScrollWrapper from '../../../component/ScrollWrapper';
import {vh} from '../../../utils/dimensions';
import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';

const GiveReview = ({navigation}) => {
  const renderReviews = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <QanelasBold style={styles.enterRatingTextStyle}>
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
        </QanelasMedium>
      

        <QanelasBold style={styles.totalRatingTextStyle}>
          Total Rating
        </QanelasBold>
        <AirbnbRating
          count={5}
          defaultRating={3}
          size={3 * vh}
          showRating={false}
        />

        <InputField label="Write Review" required placeholder="Enter Review" />

        <CustomButton style={styles.sendButtonStyle} text="Send" />
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
