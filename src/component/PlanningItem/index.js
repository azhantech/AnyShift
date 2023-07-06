import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import QanelasMedium from '../Texts/QanelasMedium';
import QanelasSemiBold from '../Texts/QanelasSemiBold';
import {icons} from '../../assets/images';
import {colors} from '../../utils/appTheme';

const PlanningItem = props => {
  const {item, onPress} = props;
  const handleStatusColor = () => {
    if (item?.status == 'pending') {
      return colors.warningColor;
    }
    if (item?.status == 'approved') {
      return colors.successColor;
    }
    return colors.darkGray;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <View style={styles.row}>
        <View style={styles.profileImageViewStyle}>
          <Image source={item?.picture} style={styles.userImage} />
        </View>

        <View style={styles.userNameContainer}>
          <View style={styles.nameViewStyle}>
            <View
              style={[
                styles.statusViewStyle,
                {
                  backgroundColor: handleStatusColor(),
                },
              ]}>
              <QanelasSemiBold style={styles.statusTextStyle}>
                {item?.status}
              </QanelasSemiBold>
            </View>
            <QanelasBold style={styles.userName}>{item?.name}</QanelasBold>
            <QanelasMedium style={styles.dateStyle}>{item?.time}</QanelasMedium>
            <QanelasMedium style={styles.dateStyle}>
              {item?.including}
            </QanelasMedium>
          </View>
          <TouchableOpacity
            onPress={onPress}
            style={styles.heartFilledViewStyle}>
            <Image style={styles.heartIconStyle} source={icons.rightArrow} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanningItem;
