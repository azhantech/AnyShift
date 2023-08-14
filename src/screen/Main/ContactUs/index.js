import React, {useLayoutEffect} from 'react';
import {View, Image} from 'react-native';

import {Styles} from './styles';
import {generalImage} from '../../../assets/images';
import InputField from '../../../component/Inputs/InputField';
import Scrollwrapper from '../../../component/ScrollWrapper';
import {vh} from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
const ContactUs = props => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackground: () => {
        return (
          <View style={Styles.headerMainContainer}>
            <View style={Styles.headerTopContainer}></View>
            <View style={Styles.profileDetailsContainer}>
              <Image
                source={generalImage.headerBackgroundImage}
                style={Styles.profileDetailsContainer.image}
              />
            </View>
          </View>
        );
      },
    });
  });

  return (
    <Scrollwrapper
      style={Styles.mainContainer}
      contentContainerStyle={Styles.contentContainerStyle}>
      <View style={Styles.fieldContainer}>
        <InputField label="Full Name" required />
        <InputField label="Email" required />
        <InputField label="Subject" required />
        <InputField
          inputContainerIcon={{height: vh * 15}}
          inputContainer={{height: '100%'}}
          multiline={true}
          label="Message"
          required
        />
      </View>
      <View style={Styles.btn}>
        <CustomButton text="Submit" />
      </View>
    </Scrollwrapper>
  );
};
export default ContactUs;
