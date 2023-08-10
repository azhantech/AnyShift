import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import {colors} from '../../../utils/appTheme';

const InvoiceItem = props => {
  const item = props?.item;

  const handleStatusColor = () => {
    if (item.status == 'unpaid') {
      return colors.warningColor;
    }

    if (item.status == 'paid') {
      return colors.successColor;
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
            Invoice ID
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            #12345
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
            Invoice Amount
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>$100</QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            No. of Jobs
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>7</QanelasMedium>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Payment Date
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            05/12/2023
          </QanelasMedium>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InvoiceItem;
