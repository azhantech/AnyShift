import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import QanelasRegular from '../Texts/QanelasRegular';
import {icons} from '../../assets/images';
import {styles} from './styles';
const Picker = ({
  text,
  pickerMainContainer,
  pickerTextContainer,
  pickerText,
  pickerIconContainer,
  pickerIcon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.pickerMainContainer, pickerMainContainer]}
      onPress={onPress}>
      <View style={[styles.pickerTextContainer, pickerTextContainer]}>
        <QanelasRegular style={[styles.pickerText, pickerText]}>
          {text}
        </QanelasRegular>
      </View>
      <View style={[styles.pickerIconContainer, pickerIconContainer]}>
        <Image
          source={icons.dropDown}
          style={[styles.pickerIcon, pickerIcon]}
        />
      </View>
    </TouchableOpacity>
  );
};
export default Picker;
