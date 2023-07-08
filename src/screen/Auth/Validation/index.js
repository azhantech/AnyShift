import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AuthHeader from '../../../component/Headers/AuthHeader';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import CustomButton from '../../../component/Buttons/CustomButton';
import {icons} from '../../../assets/images';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import TouchableText from '../../../component/Buttons/TouchableText';

const Validation = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <QanelasBold style={styles.headingText}>
          Validate your phone number
        </QanelasBold>
      </View>
      <QanelasRegular style={styles.text}>
        Enter the code you recieved by SMS
      </QanelasRegular>
      <View style={styles.otpContainer}>
        <OTPInputView
          style={styles.OTPInputView}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      <TouchableOpacity style={styles.resendbtn}>
        <QanelasRegular style={styles.resendText}>Send New Code</QanelasRegular>
      </TouchableOpacity>
      <CustomButton
        text="Validate Code"
        onPress={() => props?.navigation.navigate('DrawerNavigator')}
      />
      <TouchableText
        text={'Back to'}
        touchableText={'Login'}
        onPress={() => props?.navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

export default Validation;
