import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import QanelasRegular from '../../Texts/QanelasRegular';
import {styles} from './styles';

const TouchableOpacityText = ({
  mainContainerStyles,
  text,
  textStyle,
  touchableText,
  TouchableOpacityStyle,
  touchableTextStyle,
  onPress,
}) => {
  return (
    <View style={[styles.mainContainer, mainContainerStyles]}>
      <QanelasRegular style={[styles.textStyle, textStyle]}>
        {text}
      </QanelasRegular>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.TouchableOpacityStyle, TouchableOpacityStyle]}>
        <QanelasRegular style={[styles.touchableText, touchableTextStyle]}>
          {touchableText}
        </QanelasRegular>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacityText;
