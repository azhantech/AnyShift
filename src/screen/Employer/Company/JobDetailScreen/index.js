import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {generalImage} from '../../../../assets/images';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import CustomButton from '../../../../component/Buttons/CustomButton';

const JobDetailScreen = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.item}>
        <QanelasSemiBold style={styles.heading}>Job Title</QanelasSemiBold>
        <QanelasMedium style={styles.itemValue}>ABC Job</QanelasMedium>
      </View>

      <View style={styles.item}>
        <QanelasSemiBold style={styles.heading}>
          Job Description
        </QanelasSemiBold>
        <QanelasMedium style={styles.itemValue}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam vo luptua. At vero eos et accusam et justo duo dolores et ea
          rebum.{' '}
        </QanelasMedium>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <QanelasSemiBold style={styles.heading}>
            Who can Apply?
          </QanelasSemiBold>
          <QanelasMedium style={styles.itemValue}>
            Normal, Student
          </QanelasMedium>
        </View>

        <View style={styles.item}>
          <QanelasSemiBold style={styles.heading}>Languages</QanelasSemiBold>
          <QanelasMedium style={styles.itemValue}>English</QanelasMedium>
        </View>
      </View>

      <View style={styles.item}>
        <QanelasSemiBold style={styles.heading}>Address</QanelasSemiBold>
        <QanelasMedium style={styles.itemValue}>
          Frankfurter Alee Berlin, Germany
        </QanelasMedium>
      </View>

      <QanelasSemiBold style={styles.heading}>Location</QanelasSemiBold>

      <Image source={generalImage.horizontalMap} style={styles.map} />

      <View style={styles.containersRow}>
        <QanelasSemiBold style={styles.heading}>Shift Dates</QanelasSemiBold>
        <View style={styles.dateRow}>
          <View style={styles.dateContainer}>
            <QanelasSemiBold style={styles.date}>Mon-Wed</QanelasSemiBold>
            <QanelasSemiBold style={styles.date}>15-17 May</QanelasSemiBold>
          </View>
          <View style={styles.dateContainer}>
            <QanelasSemiBold style={styles.date}>Mon-Wed</QanelasSemiBold>
            <QanelasSemiBold style={styles.date}>15-17 May</QanelasSemiBold>
          </View>
        </View>
      </View>

      <View style={styles.item}>
        <QanelasBold style={styles.bigDate}>Monday 15 May, 2023</QanelasBold>
        <QanelasSemiBold style={styles.heading}>
          How many people do you need?
        </QanelasSemiBold>
      </View>

      <View style={styles.item}>
        <QanelasSemiBold style={styles.heading}>Shift Charges</QanelasSemiBold>
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

      <CustomButton
        onPress={() => navigation.navigate('JobApplicationListScreen')}
        style={styles.button}
        text="job applications"
      />
    </ScrollView>
  );
};

export default JobDetailScreen;
