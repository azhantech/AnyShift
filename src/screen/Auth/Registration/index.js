import React, {useState} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Scrollable from '../../../component/ScrollWrapper';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import {styles} from './Styles';
import InputField from '../../../component/Inputs/InputField';
import {icons} from '../../../assets/images';
import Picker from '../../../component/Picker';
import {vh} from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
import TouchableText from '../../../component/Buttons/TouchableText';
import {colors} from '../../../utils/appTheme';
const Registration = () => {
  const [step, setStep] = useState(2);
  const renderStep = () => {
    if (step == 1) {
      return (
        <View>
          <View style={styles.fieldContainer}>
            <InputField
              placeholder="Enter email password"
              label="First name"
              required
            />
            <InputField
              placeholder="Enter email password"
              label="First name"
              required
            />
            <InputField
              placeholder="Enter email password"
              label="First name"
              optional
            />
          </View>
          <View style={styles.noteContainer}>
            <QanelasRegular style={styles.noteText}>
              Note: This is the name we share with employers
            </QanelasRegular>
          </View>
          <View style={styles.dobContainer}>
            <QanelasRegular>Date of Birth</QanelasRegular>
            <View style={styles.pickerContainer}>
              <Picker text="Day" />
              <Picker text="Month" />
              <Picker text="Year" />
            </View>
          </View>
          <View style={[styles.fieldContainer, {height: vh * 22}]}>
            <InputField
              placeholder="Enter Your Address"
              label="Address "
              required
            />
            <InputField
              placeholder="Enter Invitation Code"
              label="Invitation Code"
              optional
            />
          </View>
          <View>
            <CustomButton text="Continue" />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.fieldContainer}>
            <InputField
              placeholder="Enter Your Email Address"
              label="Email Address"
              required
            />
            <InputField
              placeholder="Enter Password"
              label="Password"
              required
            />
            <InputField
              placeholder="Confirm Password"
              label="Confirm Password"
              required
            />
          </View>
          <View style={styles.requirementContainer}>
            <QanelasRegular style={styles.noteText}>
              * Must be at least 8 Characters
            </QanelasRegular>
            <QanelasRegular style={styles.noteText}>
              * Must have at least one uppercase letter
            </QanelasRegular>
            <QanelasRegular style={styles.noteText}>
              * Must have at least one lowercase letter
            </QanelasRegular>
            <QanelasRegular style={styles.noteText}>
              * Must have at least one number
            </QanelasRegular>
          </View>
          <View style={styles.noteContainer}>
            <QanelasRegular style={[styles.noteText, {color: colors.black}]}>
              I agree to General Terms and Condition & Privacy Policy of
              Anyshift
            </QanelasRegular>
          </View>
          <View style={styles.btnContainer}>
            <CustomButton text="Sign up" />
            <TouchableText text="Back to" touchableText="Login" />
          </View>
        </View>
      );
    }
  };
  return (
    <Scrollable
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.stepTextContainer}>
        <View style={styles.stepStyle}>
          <QanelasBold style={styles.stepText}>Step 1/2</QanelasBold>
        </View>
        <View style={styles.stepIndicatorMainContainer}>
          <View style={styles.stepIndicatorContainer}></View>
          <View style={styles.stepIndicatorContainer}></View>
        </View>
      </View>
      <View style={styles.headingContainer}>
        <QanelasBold style={styles.headingText}>
          Personal Information
        </QanelasBold>
      </View>
      {renderStep()}
    </Scrollable>
  );
};

export default Registration;
