import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Image } from 'react-native';
import InputField from '../../../component/Inputs/InputField';
import { styles } from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import { icons } from '../../../assets/images';
import { vh, vw } from '../../../utils/dimensions';
import TouchableText from '../../../component/Buttons/TouchableText';
import { colors } from '../../../utils/appTheme';
const SignupScreen = props => {
  const [signedInAs, setSignedInAs] = useState(null);
  const registrationData = [
    {
      id: 0,
      image: icons.EmployeeIcon,
      text: 'Register as a Employee',
    },
    {
      id: 1,
      image: icons.EmployerIcon,
      text: 'Register as a Employer',
    },
  ];
  const socialLoginData = [
    {
      id: 0,
      image: icons.email,
      text: 'Sign In With Email',
    },
    {
      id: 0,
      image: icons.google,
      text: 'Sign In With Google',
    },
    {
      id: 0,
      image: icons.facebook,
      text: 'Sign In With Facebook',
    },
    {
      id: 0,
      image: icons.AppleIcon,
      text: 'Sign In With Apple',
    },
  ];

  const handleSignUp = id => {
    setSignedInAs(id);
  };

  const renderSelectionView = () => {
    return (
      <View style={styles.renderSelectionView}>
        {registrationData.map((val, index) => {
          return (
            <TouchableOpacity
              style={styles.selectionCOntainer(signedInAs, val?.id)}
              onPress={() => handleSignUp(val?.id)}
            >
              <View style={styles.selectionImageContainer}>
                <Image
                  source={val?.image}
                  style={styles.employeeImage(signedInAs, val?.id)}
                />
                <QanelasRegular style={styles.selectiontext}>
                  {val?.text}
                </QanelasRegular>
              </View>
              <TouchableOpacity
                style={styles.selectionMarkContainer(signedInAs, val?.id)}>
                {signedInAs == val?.id && <Image source={icons.check} />}
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const renderSocialLogin = () => {
    return (
      <View style={styles.socialLoginMainContainer}>
        {socialLoginData.map((val, index) => {
          return (
            <TouchableOpacity
              // onPress={() => props?.navigation.navigate('Registration')}
              onPress={signedInAs == 1 ? () => props?.navigation.navigate('RegistrationEmployer') : () => props?.navigation.navigate('Registration')}
              style={styles.renderSocialLogin}
            >
              <View style={styles.socialLoginImageContainer}>
                <Image source={val?.image} style={styles.socialLoginIcon} />
              </View>
              <View style={styles.socialLoginTextContainer}>
                <QanelasRegular style={styles.socialLoginText}>
                  {val?.text}
                </QanelasRegular>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.headingContainer}>
        <QanelasBold style={styles.headingText}>Sign Up</QanelasBold>
      </View>
      {renderSelectionView()}
      <View style={styles.horizontalLineContainer}>
        <View style={styles.horizontalLine}></View>
      </View>
      {renderSocialLogin()}
      <TouchableText text={'Back to'} touchableText={'Login'} />
    </ScrollView>
  );
};
export default SignupScreen;
