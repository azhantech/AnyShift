import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

import Scrollable from '../../../component/ScrollWrapper';
import QanelasBold from '../../../component/Texts/QanelasBold';
import { styles } from './styles';
import InputField from '../../../component/Inputs/InputField';
import { icons } from '../../../assets/images';
import { vh, vw } from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
import TouchableText from '../../../component/Buttons/TouchableText';
import {showMessage} from 'react-native-flash-message';
import {SignUpEmployeer} from '../../../redux/Employer/AuthSlice';
import {useDispatch} from 'react-redux';

const RegistrationEmployer = props => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfromPassword, setCnfromPassword] = useState('');
  const [phone, setPhone] = useState('');

  const hanldebtn = async () => {
    // props.navigation.navigate('SignInScreen');

    if (firstName == '') {
      showMessage({
        message: 'Please enter your FirstName',
        type: 'danger',
      });
    } else if (lastName == '') {
      showMessage({
        message: 'Please enter your LastName',
        type: 'danger',
      });
    } else if (phone == '') {
      showMessage({
        message: 'Please enter your phone number',
        type: 'danger',
      });
    } else if (email == '') {
      showMessage({
        message: 'Please enter your Email',
        type: 'danger',
      });
    } else if (password == '') {
      showMessage({
        message: 'Please enter password',
        type: 'danger',
      });
    } else if (cnfromPassword == '') {
      showMessage({
        message: 'Please re-enter your password',
        type: 'danger',
      });
    } else if (cnfromPassword != password) {
      showMessage({
        message: 'password doesnot match!',
        type: 'danger',
      });
    } else {
      try {
        const data = {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phone,
          emailAddress: email,
          password: password,
        };
        const response = await dispatch(SignUpEmployeer(data));
        if (response) {
          showMessage({
            message: response?.message,
            type: 'success',
          });
          props.navigation.navigate('SignInScreen');
        }
      } catch (err) {
        showMessage({
          message: err,
          type: 'danger',
        });
      }
    }
  };

  const renderStep = () => {
    if (step == 1) {
      return (
        <Animated.View
          entering={SlideInRight.duration(2)}
          exiting={SlideOutLeft.duration(2)}>
          <View style={styles.fieldContainer}>
            <InputField
              placeholder="Enter First Name"
              label="First name"
              required
              onChangeText={setFirstName}
              value={firstName}
              returnKeyType="next"
            />
            <InputField
              placeholder="Enter Last Name"
              label="Last name"
              required
              onChangeText={setLastName}
              value={lastName}
              returnKeyType="next"
            />
            <InputField
              placeholder="Enter your phone number"
              label="Mobile Number"
              required
              keyboardType="number-pad"
              onChangeText={setPhone}
              value={phone}
              returnKeyType="next"
            />
          </View>

          <View style={styles.fieldContainer}>
            <InputField
              placeholder="Enter Your Email Address"
              label="Email Address"
              required
              onChangeText={setEmail}
              value={email}
            />
            <InputField
              placeholder="Enter Password"
              label="Password"
              secureTextEntry
              required
              onChangeText={setPassword}
              value={password}
              maxLength={16}
            />
            <InputField
              placeholder="Confirm Password"
              label="Confirm Password"
              secureTextEntry
              required
              onChangeText={setCnfromPassword}
              value={cnfromPassword}
              maxLength={16}
            />
            <></>
          </View>
        </Animated.View>
      );
    }
  };

  const renderBackHeader = () => {
    const handleOnPress = () => {
      if (step == 1) {
        props?.navigation.goBack();
      }
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: vw * 80,
        }}>
        <TouchableOpacity onPress={handleOnPress} style={[styles.textButton]}>
          <Image source={icons.back} style={styles.backIconStyle} />
        </TouchableOpacity>
        <QanelasBold style={{ fontSize: vh * 3 }}>Sign up</QanelasBold>
        <View />
      </View>
    );
  };

  return (
    <Scrollable
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainerStyle}>
      {renderBackHeader()}
      {renderStep()}
      <View style={styles.btnContainer}>
        <CustomButton
          text="Sign up"
          onPress={hanldebtn}
          style={{ marginTop: vh * 3 }}
        />
        <TouchableText
          text="Back to"
          touchableText="Login"
          onPress={() => props?.navigation?.navigate('SignInScreen')}
        />
      </View>
    </Scrollable>
  );
};

export default RegistrationEmployer;
