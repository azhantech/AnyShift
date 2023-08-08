import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasBold from '../../Texts/QanelasBold';
import QanelasRegular from '../../Texts/QanelasRegular';
import {icons} from '../../../assets/images';

const HomeCardSmall = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.leftContainer}>
        <View style={styles.circle}>
          <Image style={styles.icon} source={icon} />
        </View>
        <QanelasBold style={styles.title}>{title}</QanelasBold>
      </View>

      <Image source={icons.rightArrow} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default HomeCardSmall;
