import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';

import styles from './styles';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import {icons} from '../../../../assets/images';
import InputField from '../../../../component/Inputs/InputField';
import {vh, vw} from '../../../../utils/dimensions';
import CustomButton from '../../../../component/Buttons/CustomButton';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import {colors} from '../../../../utils/appTheme';
import ScrollWrapper from '../../../../component/ScrollWrapper';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import GeneralModal from '../../../../component/ModalMessages/GeneralModal';

const data = [
  {active: true},
  {active: false},
  {active: false},
  {active: false},
];

const VacancyDetailScreen = props => {
  const [steps, setSteps] = useState(data);
  const [activeStep, setActiveStep] = useState(1);
  const [successModal, setSuccessModal] = useState(false);
  const edit = props.route.params?.edit;

  const modalHandler = () => {
    setSuccessModal(!successModal);
    // props.navigation.goBack();
  };

  const modalHandlerPress = () => {
    setSuccessModal(!successModal);
    props.navigation.goBack();
  };

  const renderStepOne = () => {
    return (
      <View>
        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>Job Title</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            {edit ? <QanelasMedium>Cash Counter</QanelasMedium> : <View />}
            <Image source={icons.arrowDown} style={styles.dropDown} />
          </TouchableOpacity>
        </View>

        <InputField
          inputContainerIcon={{height: vh * 15, width: vw * 90}}
          inputContainer={{height: '100%'}}
          multiline={true}
          label="Job Description"
          value={
            edit &&
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
          }
        />

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>Languages</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            {edit ? <QanelasMedium>English</QanelasMedium> : <View />}
            <Image source={icons.arrowDown} style={styles.dropDown} />
          </TouchableOpacity>
        </View>

        <InputField
          placeholder="Address"
          inputContainerIcon={{width: vw * 90}}
          label="Address"
        />

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>Location</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            <Image source={icons.location} style={styles.locationIcon} />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.headingContainer}>
          <QanelasBold style={styles.heading}>Who can Apply?</QanelasBold>
        </View>

        <View style={styles.boxRow}>
          <View style={styles.boxContainer}>
            <TouchableOpacity style={styles.tickBoxViewStyle(edit)}>
              {edit && (
                <Image source={icons.whiteTick} style={styles.checkIcon} />
              )}
            </TouchableOpacity>
            <QanelasRegular style={styles.boxTitle}>Normal</QanelasRegular>
          </View>
          <View style={styles.boxContainer}>
            <TouchableOpacity
              style={styles.tickBoxViewStyle()}></TouchableOpacity>
            <QanelasRegular style={styles.boxTitle}>Student</QanelasRegular>
          </View>
        </View> */}
      </View>
    );
  };

  const renderStepTwo = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <QanelasBold style={styles.shiftHeading}>Shifts</QanelasBold>
        <QanelasBold style={styles.smallHeading}>
          Select Working Days
        </QanelasBold>

        <View>
          <Calendar
            onDayPress={day => {
              console.log('selected day', day);
            }}
            style={styles.calendar}
          />
        </View>
        <QanelasBold style={styles.smallHeading}>
          Selected No. of Days: 1/ 3
        </QanelasBold>
      </View>
    );
  };

  const renderStepThree = () => {
    return (
      <View>
        <QanelasBold style={styles.shiftHeading}>Shift Timing</QanelasBold>
        <View style={styles.dateRow}>
          <View style={styles.dateContainer}>
            <QanelasSemiBold style={styles.date}>Mon-Wed</QanelasSemiBold>
            <QanelasSemiBold style={styles.date}>15-17 May</QanelasSemiBold>
          </View>
          <View style={styles.dateContainer}>
            <QanelasSemiBold style={styles.date}>Mon-Wed</QanelasSemiBold>
            <QanelasSemiBold style={styles.date}>15-17 May</QanelasSemiBold>
          </View>
        </View>

        <View style={styles.headingContainerStepThree}>
          <QanelasBold style={styles.heading}>Monday 15 May, 2023</QanelasBold>
        </View>

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>Break</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            {edit ? (
              <QanelasMedium>12:00</QanelasMedium>
            ) : (
              <QanelasMedium>Enter Break Time</QanelasMedium>
            )}
            <Image source={icons.clock} style={styles.dropDown} />
          </TouchableOpacity>
        </View>

        <InputField
          inputContainerIcon={{width: vw * 90}}
          label="How many people do you need?"
          keyboardType="number-pad"
          value={edit && '6'}
        />

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>From</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            {edit ? (
              <QanelasMedium>12:00</QanelasMedium>
            ) : (
              <QanelasMedium>Enter From Time</QanelasMedium>
            )}
            <Image source={icons.clock} style={styles.dropDown} />
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>To</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            {edit ? (
              <QanelasMedium>16:00</QanelasMedium>
            ) : (
              <QanelasMedium>Enter To Time</QanelasMedium>
            )}
            <Image source={icons.clock} style={styles.dropDown} />
          </TouchableOpacity>
        </View>

        <InputField
          inputContainerIcon={{width: vw * 90}}
          label="Shift charges"
          placeholder="Enter Shift Charges"
          value={edit && '$ 200'}
          keyboardType="number-pad"
        />

        <View style={[styles.checkBoxRow, {marginTop: vh * 4}]}>
          <TouchableOpacity style={styles.tickBoxViewStyle(edit)}>
            {edit && (
              <Image source={icons.whiteTick} style={styles.checkIcon} />
            )}
          </TouchableOpacity>
          <QanelasRegular style={styles.boxTitle}>
            Each Day Same Schedule
          </QanelasRegular>
        </View>
      </View>
    );
  };

  const renderStepFour = () => {
    return (
      <View>
        <QanelasBold style={styles.shiftHeading}>
          Terms and Conditions Document
        </QanelasBold>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: vw * 80,
            marginVertical: vh * 10,
          }}>
          <TouchableOpacity
            style={styles.tickBoxViewStyle()}></TouchableOpacity>
          <QanelasRegular style={styles.boxTitle}>
            Backgroung check required for this job
          </QanelasRegular>
        </View> */}

        <View style={styles.uploadBtn}>
          <TouchableOpacity style={styles.logoButton}>
            <Image source={icons.upload} style={styles.uploadIcon} />
            <QanelasBold style={styles.uploadText}>Upload Document</QanelasBold>
          </TouchableOpacity>
        </View>

        <QanelasRegular style={{textAlign: 'center'}}>OR</QanelasRegular>

        <InputField
          placeholder="Enter URL"
          inputContainerIcon={{width: vw * 90}}
          label="URL"
        />
        <QanelasRegular>
          Note: We will only share your terms and conditions with approved
          employee only over email
        </QanelasRegular>
      </View>
    );
  };

  const content = {
    1: renderStepOne(),
    2: renderStepTwo(),
    3: renderStepThree(),
    4: renderStepFour(),
  };

  const getSteps = () => {
    return steps.map((val, i) => {
      return (
        <View
          key={i}
          style={[
            styles.bar,
            val.active && {backgroundColor: colors.primaryColor},
          ]}
        />
      );
    });
  };

  const renderSteps = () => {
    return (
      <View style={styles.stepsContainer}>
        <QanelasBold style={styles.stepTitle}>Step {activeStep}/4</QanelasBold>
        <View style={styles.stepsRow}>{getSteps()}</View>
      </View>
    );
  };

  const nextHandler = () => {
    if (activeStep == 4) {
      return modalHandler();
    }

    setActiveStep(prev => prev + 1);
    const stepsClone = [...steps];
    stepsClone[activeStep].active = true;
    setSteps(stepsClone);
  };

  const renderContent = () => {
    return content[activeStep];
  };

  return (
    <ScrollWrapper
      avoidKeyboard={true}
      style={styles.scroll}
      contentContainerStyle={styles.content}>
      <View style={styles.contentContainer}>
        {renderSteps()}

        {renderContent()}

        <View style={styles.btnContainer}>
          <CustomButton
            text={activeStep == 4 ? 'Create Job' : 'Next'}
            onPress={nextHandler}
          />
        </View>
      </View>
      <GeneralModal
        visible={successModal}
        onPress={modalHandlerPress}
        onHide={modalHandler}
        buttonTitle="Okay"
        icon={icons.success}
        firstDescription="SUCCESS"
        placeholder="Job has been created successfully"
      />
    </ScrollWrapper>
  );
};

export default VacancyDetailScreen;
