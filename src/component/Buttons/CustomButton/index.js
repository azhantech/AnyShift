import React from 'react';
import { TouchableOpacity } from 'react-native';


import styles from './styles';
import QanelasRegular from '../../Texts/QanelasRegular';

const CustomButton = props => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={handleOnPress}>
      <QanelasRegular style={[styles.text, props.textStyle]}>
        {props.text}
      </QanelasRegular>
    </TouchableOpacity>
  );
};

export default CustomButton;
