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
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';
const Registration = props => {
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState(1);

  const hanldebtn = () => {
    if (step == 1) {
      setStep(e => e + 1);
    } else {
      props.navigation.navigate('Validation');
    }
  };
  const renderStep = () => {
    if (step == 1) {
      return (
        <Animated.View entering={SlideInRight.duration(2)} exiting={SlideOutLeft.duration(2)}>
          <View style={styles.fieldContainer}>
            <InputField
              placeholder="Enter First Name"
              label="First name"
              required
            />
            <InputField
              placeholder="Enter Last Name"
              label="Last name"
              required
            />
            <InputField
              placeholder="Enter Nick Name"
              label="Nick Name"
              optional
            />
          </View>
          <View style={styles.noteContainer}>
            <QanelasRegular style={styles.noteText}>
              Note: This is the name we share with employers
            </QanelasRegular>
          </View>
          <View style={styles.dobContainer}>
            <QanelasRegular style={styles.text}>Date of Birth</QanelasRegular>
            <View style={styles.pickerContainer}>
              <Picker text="Day" />
              <Picker text="Month" />
              <Picker text="Year" />
            </View>
          </View>
          <View style={[styles.fieldContainer, {height: vh * 25}]}>
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
        </Animated.View>
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
              secureTextEntry
              required
            />
            <InputField
              placeholder="Confirm Password"
              label="Confirm Password"
              secureTextEntry
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
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={styles.tickBoxViewStyle(checked)}>
              {checked && (
                <Image
                  style={styles.tickBoxImageStyle(checked)}
                  source={icons.check}
                />
              )}
            </TouchableOpacity>
            <View>
              <QanelasRegular style={[styles.noteText, {color: colors.grey, fontSize: vh * 1.3}]}>
                I agree to General Terms and Condition & Privacy Policy of
                Anyshift
              </QanelasRegular>
            </View>
          </View>
        </View>
      );
    }
  };

  const renderBackHeader = () => {
    const handleOnPress = () => {
      if (step == 1) {
        props?.navigation.goBack();
      }

      if (step > 1) {
        setStep(step - 1);
      }
    };
    return (
      <TouchableOpacity onPress={handleOnPress} style={[styles.textButton]}>
        <Image source={icons.back} style={styles.backIconStyle} />
      </TouchableOpacity>
    );
  };
  return (
    <Scrollable
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.stepTextContainer}>
        {renderBackHeader()}
        <View style={styles.stepStyle}>
          <QanelasBold style={styles.stepText}>Step {step}/2</QanelasBold>
        </View>
        <View style={styles.stepIndicatorMainContainer}>
          <View style={styles.stepIndicatorContainer}></View>
          <View
            style={[
              styles.stepIndicatorContainer,
              {
                backgroundColor:
                  step == 2 ? colors.primaryColor : colors.greyBtnOrder,
              },
            ]}></View>
        </View>
      </View>
      <View style={styles.headingContainer}>
        <QanelasBold style={styles.headingText}>
          {step == 1 ? 'Personal Information' : 'Login Credentials'}
        </QanelasBold>
      </View>
      {renderStep()}
      <View style={styles.btnContainer}>
        <CustomButton text="Sign up" onPress={hanldebtn} />
        <TouchableText text="Back to" touchableText="Login" onPress={() => props?.navigation?.navigate('SignInScreen')}/>
      </View>
    </Scrollable>
  );
};

export default Registration;
