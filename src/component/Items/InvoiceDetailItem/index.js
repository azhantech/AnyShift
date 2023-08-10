import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';

const InvoiceDetailItem = props => {
  const item = props?.item;

  return (
    <View style={styles.mainContentContainerStyle}>
      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Job ID
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>
            #12345
          </QanelasMedium>
        </View>

        <View style={styles.profileDetailsSubRowSecond}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Job Title
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>
            Counter Cashier
          </QanelasMedium>
        </View>
      </View>

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
            Job Charges
          </QanelasSemiBold>

          <QanelasMedium style={[styles.bankInfoValueStyle]}>
            $100
          </QanelasMedium>
        </View>
      </View>

      <View style={styles.mainDetailsRowViewStyle}>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Amount Paid
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>$40</QanelasMedium>
        </View>
        <View style={styles.profileDetailsSubRowOne}>
          <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
            Commission Amount
          </QanelasSemiBold>

          <QanelasMedium style={styles.bankInfoValueStyle}>$100</QanelasMedium>
        </View>
      </View>
    </View>
  );
};

export default InvoiceDetailItem;
