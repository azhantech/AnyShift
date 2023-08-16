import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import {colors} from '../../../utils/appTheme';
import {icons} from '../../../assets/images';

const JobApplicationCard = props => {
  const item = props?.item;

  const handleStatusColor = () => {
    if (item.status == 'pending') {
      return colors.warningColor;
    }

    if (item.status == 'approved') {
      return colors.successColor;
    }

    if (item.status == 'rejected') {
      return colors.primaryColor;
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
            Employee Name
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            James Milner
          </QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Status
          </QanelasSemiBold>

          <View
            style={[
              styles.statusViewStyle,
              {
                backgroundColor: handleStatusColor(),
              },
            ]}>
            <QanelasSemiBold style={styles.statusTextStyle}>
              {item.status}
            </QanelasSemiBold>
          </View>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Employee Rating
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>4.5</QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Employee Type
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>
            Student
          </QanelasMedium>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            No. of Shifts Applied For
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            05/12/2023
          </QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            No. of Shifts Applied For
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>01</QanelasMedium>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Job Charges
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>$100</QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Applied On
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>
            05/12/2023
          </QanelasMedium>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobApplicationCard;
