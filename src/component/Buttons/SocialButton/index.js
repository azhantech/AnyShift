import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import QanelasRegular from '../../Texts/QanelasRegular';

const SocialButton = props => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={handleOnPress}>
      <View style={styles.contentContainer}>
        <Image source={props.icon} style={styles.socialIcon} />
        <QanelasRegular style={[styles.text, props.textStyle]}>
          {props.text}
        </QanelasRegular>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
