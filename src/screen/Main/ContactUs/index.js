import React, { useLayoutEffect, useState } from 'react';
import { View, Image } from 'react-native';

import { Styles } from './styles';
import { generalImage } from '../../../assets/images';
import InputField from '../../../component/Inputs/InputField';
import Scrollwrapper from '../../../component/ScrollWrapper';
import { vh } from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
import { showToast } from '../../../Api/HelperFunction';
import { useDispatch } from 'react-redux';
import { contactUs } from '../../../redux/UserSlice';
const ContactUs = props => {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    if (name == null) {
      showToast('Please enter full name')
      return
    }

    if (email == null) {
      showToast('Please enter email address')
      return
    }

    if (subject == null) {
      showToast('Please enter subject')
      return
    }

    if (message == null) {
      showToast('Please enter message')
      return
    }

    try {
      const data = {
        Name: name,
        EmailAddress: email,
        Subject: subject,
        Message: message
      }
      const response = await dispatch(contactUs(data))
      if (response) {
        console.warn(response, 'responseeeeehereee')
      }
    } catch (e) {
      showToast(e)
    }

  }

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
        <InputField value={name} onChangeText={(text) => setName(text)} label="Full Name" required />
        <InputField value={email} onChangeText={(text) => setEmail(text)} label="Email" required />
        <InputField value={subject} onChangeText={(text) => setSubject(text)} label="Subject" required />
        <InputField
          value={message} onChangeText={(text) => setMessage(text)}
          inputContainerIcon={{ height: vh * 15 }}
          inputContainer={{ height: '100%' }}
          multiline={true}
          label="Message"
          required
        />
      </View>
      <View style={Styles.btn}>
        <CustomButton
          onPress={handleSubmit}
          text="Submit" />
      </View>
    </Scrollwrapper>
  );
};
export default ContactUs;
