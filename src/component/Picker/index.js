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
}) => {
  return (
    <View style={[styles.pickerMainContainer, pickerMainContainer]}>
      <View style={[styles.pickerTextContainer, pickerTextContainer]}>
        <QanelasRegular style={[styles.pickerText, pickerText]}>
          {text}
        </QanelasRegular>
      </View>
      <TouchableOpacity
        style={[styles.pickerIconContainer, pickerIconContainer]}>
        <Image
          source={icons.dropDown}
          style={[styles.pickerIcon, pickerIcon]}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Picker;
