import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import {vh, vw} from '../../utils/dimensions';
import {colors, themeShadow} from '../../utils/appTheme';
import QanelasSemiBold from '../Texts/QanelasSemiBold';
import QanelasRegular from '../Texts/QanelasRegular';

const ReviewItem = props => {
  const item = props?.item;
  return (
    <View style={styles.mainContentContainerStyle}>
      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            {item?.name}
          </QanelasSemiBold>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <AirbnbRating
            isDisabled={true}
            count={5}
            defaultRating={item?.rating}
            size={2 * vh}
            showRating={false}
          />
        </View>
      </View>
      <View style={styles.descriptionViewStyle}>
        <QanelasRegular style={styles.dateStyle}>{item?.date}</QanelasRegular>
        <QanelasRegular style={styles.descriptionStyle}>
          {item?.description}
        </QanelasRegular>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContentContainerStyle: {
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
    width: 90 * vw,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 2 * vw,
    paddingVertical: 2 * vh,
    ...themeShadow,
  },

  mainDetailsRowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5 * vw,
  },

  descriptionViewStyle: {
    marginLeft: 5 * vw,
  },

  profileDetailsSubRowOne: {
    justifyContent: 'center',
    width: 45 * vw,
  },

  bankInfoHeadingStyle: {
    color: colors.anotherBlackColor,
    fontSize: 1.8 * vh,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },

  bankInfoValueStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    textTransform: 'capitalize',
  },

  profileDetailsSubRowSecond: {
    justifyContent: 'center',
    width: 45 * vw,
  },
  dateStyle: {
    color: colors.highlightedText,
    fontSize: 1.6 * vh,
  },

  descriptionStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
  },
});
export default ReviewItem;
