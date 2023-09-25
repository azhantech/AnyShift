import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors, themeShadow} from '../../utils/appTheme';
import QanelasSemiBold from '../Texts/QanelasSemiBold';
import QanelasMedium from '../Texts/QanelasMedium';
import moment from 'moment/moment';

const ApplicationItem = props => {
  const item = props?.item;

  const handleStatusColor = () => {
    if (item?.status == 'pending') {
      return colors.warningColor;
    }

    if (item?.status == 'rejected') {
      return colors.primaryColor;
    }

    if (item?.status == 'completed') {
      return colors.successColor;
    }

    if (item?.status == 'in-progress') {
      return colors.inProgress;
    }

    if (item?.status == 'paid') {
      return colors.highlightedText;
    }

    return colors.darkGray;
  };
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      style={styles.mainContentContainerStyle}>
      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Interest Date
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            {moment(item?.appliedOn).format('DD MMM YYYY')}
          </QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Status
          </QanelasSemiBold>

          <QanelasMedium
            style={[
              styles.bankInfoValueStyle,
              {
                color: handleStatusColor(),
              },
            ]}>
            {item?.status}
          </QanelasMedium>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Job ID
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            {item?.jobShift?.job?.id}
          </QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Job Title
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>
            {item?.jobShift?.job?.title}
          </QanelasMedium>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Employer Name
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            {item?.jobShift?.job?.company?.name}
          </QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Total Amount
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>
            $ {item?.jobShift?.charges}
          </QanelasMedium>
        </View>
      </View>
    </TouchableOpacity>
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
    marginTop: 1.5 * vh,
    marginBottom: 1.5 * vh,
  },

  profileDetailsSubRowOne: {
    justifyContent: 'center',
    width: 45 * vw,
  },

  bankInfoHeadingStyle: {
    color: colors.anotherBlackColor,
    fontSize: 1.8 * vh,
    textTransform: 'capitalize',
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

  bankInfoHeadingStyle: {
    color: colors.anotherBlackColor,
    fontSize: 1.8 * vh,
    textTransform: 'capitalize',
  },

  bankInfoValueStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    textTransform: 'capitalize',
  },
});
export default ApplicationItem;
