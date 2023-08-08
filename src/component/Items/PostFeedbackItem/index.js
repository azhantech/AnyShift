import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import QanelasBold from '../../Texts/QanelasBold';
import QanelasRegular from '../../Texts/QanelasRegular';
import QanelasMedium from '../../Texts/QanelasMedium';
import {generalImage, icons} from '../../../assets/images';

const PostFeedbackItem = props => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <View style={styles.row}>
        <View style={styles.profileImageViewStyle}>
          <Image source={generalImage.profile} style={styles.userImage} />
        </View>

        <View style={styles.userNameContainer}>
          <View style={styles.nameViewStyle}>
            <QanelasBold style={styles.userName}>James Milner</QanelasBold>
          </View>
          <QanelasMedium style={styles.profession}>
            Counter Cashier
          </QanelasMedium>
        </View>
        <TouchableOpacity style={styles.heartFilledViewStyle}>
          <Image style={styles.arrowIcon} source={icons.arrowIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PostFeedbackItem;
