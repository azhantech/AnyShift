import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';
import { icons } from '../../../assets/images';
import { styles } from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import AuthHeader from '../../../component/Headers/AuthHeader';
import { useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { LoginUser, login } from '../../../redux/UserSlice';
import { showToast } from '../../../Api/HelperFunction';

const SignInScreen = props => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const handleSignIn = async () => {
    if (email == null) {
      // showMessage({
      //   message: 'Please enter email address',
      //   type: 'danger',
      // });
      showToast('Please enter email address')
      return;
    }

    if (password == null) {
      // showMessage({
      //   message: 'Please enter password',
      //   type: 'danger',
      // });
      showToast('Please enter password')
      return;
    }

    try {
      const data = {
        email,
        password,
      };

      const response = await dispatch(LoginUser(data));
      if (response?.payload) {
        console.log(
          response,
          'response==============================================',
        );
        dispatch(login(response?.payload));
      }
    } catch (error) {
      // showMessage({
      //   message: error,
      //   type: 'danger',
      // });
      showToast(error)

    }
  };
  return (
    <View style={styles.mainContainer}>
      <AuthHeader />
      <QanelasBold style={styles.headingText}>
        Login to your account
      </QanelasBold>
      <View style={styles.fieldContainer}>
        <InputField
          placeholder="Enter email address"
          leftIcon={icons.email}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          reference={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <InputField
          reference={passwordRef}
          secureTextEntry={true}
          placeholder="Enter email password"
          leftIcon={icons.privacyIcon}
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={() => handleSignIn()}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity
          style={styles.forgotPasswordTouchable}
          onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
          <QanelasRegular style={styles.forgotPasswordText}>
            Forgot Password
          </QanelasRegular>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          text="Sign In"
          onPress={handleSignIn}
        // onPress={() => props?.navigation.navigate('DrawerNavigator')}
        />
        {/* <CustomButton
          text="Sign In as Employer"
          onPress={() => props?.navigation.navigate('DrawerNavigator', { type: 'employer' })}
        /> */}
      </View>
      <View style={styles.donthaveAccountContainer}>
        <View style={styles.rowContainer}>
          <QanelasRegular>Don't have an account?</QanelasRegular>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignupScreen')}>
            <QanelasBold style={styles.textbtn}>Sign up</QanelasBold>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <QanelasBold>OR</QanelasBold>
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.socialbtnContainer}>
          <Image source={icons.facebook} style={styles.iconStyle} />
        </View>
        <View style={styles.socialbtnContainer}>
          <Image source={icons.google} style={styles.iconStyle} />
        </View>
        <View style={styles.socialbtnContainer}>
          <Image source={icons.AppleIcon} style={styles.iconStyle} />
        </View>
      </View>
    </View>
  );
};
export default SignInScreen;
