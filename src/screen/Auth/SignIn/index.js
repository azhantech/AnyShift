import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';
import {generalImage, icons} from '../../../assets/images';
import {styles} from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import {vh, vw} from '../../../utils/dimensions';
import AuthHeader from '../../../component/Headers/AuthHeader';
const SignInScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <AuthHeader />
      <QanelasBold style={styles.headingText}>
        Login to your account
      </QanelasBold>
      <View style={styles.fieldContainer}>
        <InputField placeholder="Enter email address" leftIcon={icons.email} />
        <InputField
          placeholder="Enter email password"
          leftIcon={icons.privacyIcon}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity style={styles.forgotPasswordTouchable}>
          <QanelasRegular style={styles.forgotPasswordText}>
            Forgot Password
          </QanelasRegular>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
      <CustomButton text="Sign In" />
      </View>
      
    </View>
  );
};
export default SignInScreen;
