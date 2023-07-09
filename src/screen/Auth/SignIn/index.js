import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';
import {icons} from '../../../assets/images';
import {styles} from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import AuthHeader from '../../../component/Headers/AuthHeader';
const SignInScreen = props => {
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
          onPress={() => props?.navigation.navigate('DrawerNavigator')}
        />
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
