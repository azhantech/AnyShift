import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {icons} from '../../../assets/images/index';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import styles from './styles';
import MainContainer from '../../../component/MainContainer';
import ScrollWrapper from '../../../component/ScrollWrapper';
import CustomButton from '../../../component/Buttons/CustomButton';
import AuthHeader from '../../../component/Headers/AuthHeader';
import InputField from '../../../component/Inputs/InputField';
import GeneralModal from '../../../component/ModalMessages/GeneralModal';

const ForgotPasswordScreen = props => {
  const [cancelReasonModal, setCancelReasonModal] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);

  const [step, setStep] = useState(1);
  const handleEmail = () => {
    setStep(step + 1);
  };

  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };

  const handleVerification = () => {
    setStep(step + 1);
  };

  const handleOnPress = () => {
    if (step == 1) {
      handleEmail();
    }
    if (step == 2) {
      handleVerification();
    }
  };

  const handleVisibility = () => {
    // props.navigation.navigate('SignInScreen');
  };

  const renderConditionalFields = () => {
    if (step == 1) {
      return (
        <View style={styles.fieldsView}>
          <InputField
            placeholder="Enter email address"
            leftIcon={icons.email}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            onSubmitEditing={handleEmail}
          />
        </View>
      );
    }
    if (step == 2) {
      return (
        <View style={styles.fieldsView}>
          <InputField
            placeholder="Enter Verification Code"
            leftIcon={icons.email}
            value={verificationCode}
            onChangeText={text => setVerificationCode(text)}
            keyboardType="number-pad"
            onSubmitEditing={handleVerification}
          />

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity style={styles.forgotPasswordTouchable}>
              <QanelasRegular style={styles.forgotPasswordText}>
                Resend Code
              </QanelasRegular>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (step == 3) {
      return (
        <View style={styles.fieldsView}>
          <InputField
            placeholder="Enter your Password"
            leftIcon={icons.privacyIcon}
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <InputField
            placeholder="Enter confirm Password"
            leftIcon={icons.privacyIcon}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            onSubmitEditing={handleOnPress}
            inputContainerStyle={styles.inputFieldStyle}
          />
        </View>
      );
    }
  };

  const renderSubTitle = () => {
    if (step == 1) {
      return (
        <QanelasRegular style={styles.subTitleTextStyle}>
          Enter your email to recover your password.{' '}
        </QanelasRegular>
      );
    }

    if (step == 2) {
      return (
        <QanelasRegular style={styles.subTitleTextStyle}>
          Enter verification code sent to your email address.
        </QanelasRegular>
      );
    }

    if (step == 3) {
      return (
        <QanelasRegular style={styles.subTitleTextStyle}>
          Set new password for your account.
        </QanelasRegular>
      );
    }
  };

  const renderFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          <QanelasBold style={styles.welcomeBackTextStyle}>
            Forgot Password?
          </QanelasBold>
          {renderSubTitle()}

          {renderConditionalFields()}

          {step == 3 ? (
            <CustomButton
              onPress={handleVisibility}
              style={styles.CustomButtonStyle}
              text="Update"
            />
          ) : (
            <CustomButton
              onPress={handleOnPress}
              style={styles.CustomButtonStyle}
              text="Continue"
            />
          )}
        </View>

        <TouchableOpacity style={styles.donthaveAccountContainer}>
          <View style={styles.rowContainer}>
            <QanelasRegular style={styles.backToTextStyle}>
              Back To Login
            </QanelasRegular>
          </View>
        </TouchableOpacity>
        <View></View>
      </View>
    );
  };

  return (
    <MainContainer>
      <ScrollWrapper
        avoidKeyboard={true}
        style={styles.scroll}
        contentContainerStyle={styles.content}>
        <AuthHeader />
        {renderFields()}

        <GeneralModal
          visible={true}
          onPress={onHandleCancelReasonModal}
          onHide={onHandleCancelReasonModal}
          style={styles.modalContainerStyle}
          buttonTitle="OK"
          icon={icons.warning}
          firstDescription="Complete Profile to Proceed"
          placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        />
      </ScrollWrapper>
    </MainContainer>
  );
};
export default ForgotPasswordScreen;
