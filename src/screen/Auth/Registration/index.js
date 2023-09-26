import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Scrollable from '../../../component/ScrollWrapper';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import {styles} from './Styles';
import InputField from '../../../component/Inputs/InputField';
import {icons} from '../../../assets/images';
import Picker from '../../../component/Picker';
import {vh, vw} from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
import TouchableText from '../../../component/Buttons/TouchableText';
import {colors} from '../../../utils/appTheme';
import DatePickerPopUp from '../../../component/Popups/DatePickerPopUp';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {useDispatch} from 'react-redux';
import {SignUpEmployee} from '../../../redux/UserSlice';
import {showMessage} from 'react-native-flash-message';
import moment from 'moment';
import PhoneInput from 'react-native-phone-number-input';
const Registration = props => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState(null);
  const [address, setAdress] = useState('');
  const [invitationCode, setInvitationCode] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfromPassword, setCnfromPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [phone, setPhone] = useState('');
  // const [isCheck, setChecked] = useState(false);
  const dobRef = useRef();

  const hanldebtn = async () => {
    if (step == 1) {
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
      } else if (address == '') {
        showMessage({
          message: 'Please enter your Adress',
          type: 'danger',
        });
      } else if (phone == '') {
        showMessage({
          message: 'Please enter your phone number',
          type: 'danger',
        });
      } else if (selectedDate == '') {
        showMessage({
          message: 'Please select date of birth',
          type: 'danger',
        });
      } else {
        setStep(e => e + 1);
      }
    } else {
      if (email == '') {
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
          message: 'Please enter password',
          type: 'danger',
        });
      } else if (cnfromPassword != password) {
        showMessage({
          message: 'password doesnot match!',
          type: 'danger',
        });
      } else if (!checked) {
        showMessage({
          message: 'Kindly Agree to the General Terms and condition',
          type: 'danger',
        });
      } else {
        try {
          const data = {
            firstName: firstName,
            lastName: lastName,
            nickName: nickName,
            birthDate: selectedDate,
            address: address,
            phoneNumber: phone,
            invitationCode: invitationCode,
            emailAddress: email,
            password: password,
          };
          const response = await dispatch(SignUpEmployee(data));
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
      // console.log('Data from Registration ============>', data);
    }
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    // 1993-08-13 date format
    const dateSelected = moment(currentDate).format('YYYY-MM-DD');
    setSelectedDate(dateSelected);
    // setEditableProfile({
    //   ...editableProfile,
    //   DOB: moment(currentDate).format('YYYY-MM-DD'),
    // });
  };
  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    if (Platform.OS === 'ios') {
      dobRef?.current?.show();
    } else {
      showMode('date');
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
              placeholder="Enter phone number"
              label="Phone number"
              required
              onChangeText={setPhone}
              value={phone}
              returnKeyType="next"
              keyboardType="number-pad"
            />
            <InputField
              placeholder="Enter Nick Name"
              label="Nick Name"
              optional
              onChangeText={setNickName}
              value={nickName}
              returnKeyType="next"
            />
          </View>
          <View style={styles.noteContainer}>
            <QanelasRegular style={styles.noteText}>
              Note: This is the name we share with employers
            </QanelasRegular>
          </View>

          {/* <View
            style={{
              height: '12%',
              justifyContent: 'space-around',
              backgroundColor: 'red',
              width: '80%',
            }}>
            <QanelasRegular style={[styles.text]}>Phone Number</QanelasRegular>
            <View style={{height: '60%'}}>
              <PhoneInput
                // ref={phoneInput}
                // defaultValue={'Please Enter your number'}
                defaultCode="DM"
                layout="first"
                onChangeText={text => {
                  // setValue(text);
                  console.log('Text from ChangeText =======>', text);
                }}
                onChangeFormattedText={text => {
                  setPhone(text);
                  // setFormattedValue(text);
                }}
                // withDarkTheme
                // withShadow
                // autoFocus
                containerStyle={{
                  backgroundColor: colors.textInputBackgroundColor,
                  borderRadius: vh * 2,
                }}
                textContainerStyle={{
                  backgroundColor: colors.textInputBackgroundColor,
                  borderRadius: vh * 2,
                }}
              />
            </View>
          </View> */}
          <View style={styles.dobContainer}>
            <QanelasRegular style={styles.text}>Date of Birth</QanelasRegular>
            <View style={styles.pickerContainer}>
              <Picker
                pickerMainContainer={{
                  width: '100%',
                  backgroundColor: colors.textInputBackgroundColor,
                }}
                text={selectedDate ? selectedDate : 'Select Date of Birth'}
                onPress={() => showDatepicker()}
                pickerTextContainer={{
                  width: '80%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingHorizontal: vw * 5,
                }}
                pickerIconContainer={{
                  width: '20%',
                }}
                pickerIcon={{
                  tintColor: colors.primaryColor,
                }}
                pickerText={{
                  color: colors.textColor,
                }}
              />
            </View>
          </View>
          <View style={[styles.fieldContainer, {height: vh * 25}]}>
            <InputField
              placeholder="Enter Your Address"
              label="Address "
              required
              onChangeText={setAdress}
              value={address}
              returnKeyType="next"
            />
            <InputField
              placeholder="Enter Invitation Code"
              label="Invitation Code"
              optional
              onChangeText={setInvitationCode}
              value={invitationCode}
              returnKeyType="next"
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
              onChangeText={setEmail}
              value={email}
              returnKeyType="next"
            />
            <InputField
              placeholder="Enter Password"
              label="Password"
              secureTextEntry
              required
              onChangeText={setPassword}
              value={password}
              returnKeyType="next"
            />
            <InputField
              placeholder="Confirm Password"
              label="Confirm Password"
              secureTextEntry
              required
              onChangeText={setCnfromPassword}
              value={cnfromPassword}
              returnKeyType="next"
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
              <QanelasRegular
                style={[
                  styles.noteText,
                  {color: colors.grey, fontSize: vh * 1.3},
                ]}>
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
        <TouchableText
          text="Back to"
          touchableText="Login"
          onPress={() => props?.navigation?.navigate('SignInScreen')}
        />
      </View>
      <DatePickerPopUp
        ref={dobRef}
        onYes={item => onChange(null, item)}
        date={true}
      />
    </Scrollable>
  );
};

export default Registration;
