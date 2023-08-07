import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import Picker from '../../../../component/Picker';
import {icons} from '../../../../assets/images';
import InputField from '../../../../component/Inputs/InputField';
import {vh, vw} from '../../../../utils/dimensions';
import CustomButton from '../../../../component/Buttons/CustomButton';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import {colors} from '../../../../utils/appTheme';
import ScrollWrapper from '../../../../component/ScrollWrapper';

const data = [
  {active: true},
  {active: false},
  {active: false},
  {active: false},
];

const VacancyDetailScreen = () => {
  const [steps, setSteps] = useState(data);
  const [activeStep, setActiveStep] = useState(1);

  const getSteps = () => {
    return steps.map(val => {
      return (
        <View
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
    setActiveStep(prev => prev + 1);
    const stepsClone = [...steps];
    stepsClone[activeStep].active = true;
    setSteps(stepsClone);
  };

  return (
    // <View style={styles.container}>
    <ScrollWrapper
      avoidKeyboard={true}
      style={styles.scroll}
      contentContainerStyle={styles.content}>
      <View style={styles.contentContainer}>
        {renderSteps()}

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>Job Title</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
            <Image source={icons.arrowDown} style={styles.dropDown} />
          </TouchableOpacity>
        </View>

        {/* <View style={{width: vw * 90}}> */}
        <InputField
          inputContainerIcon={{height: vh * 15, width: vw * 90}}
          inputContainer={{height: '100%'}}
          multiline={true}
          label="Job Description"
        />
        {/* </View> */}

        <View style={styles.item}>
          <QanelasRegular style={styles.labelText}>Languages</QanelasRegular>
          <TouchableOpacity style={styles.inputWithIcon} activeOpacity={0.7}>
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

        <View style={styles.headingContainer}>
          <QanelasBold style={styles.heading}>Who can Apply?</QanelasBold>
        </View>

        <View style={styles.boxRow}>
          <View style={styles.boxContainer}>
            <TouchableOpacity
              style={styles.tickBoxViewStyle()}></TouchableOpacity>
            <QanelasRegular style={styles.boxTitle}>Normal</QanelasRegular>
          </View>
          <View style={styles.boxContainer}>
            <TouchableOpacity
              style={styles.tickBoxViewStyle()}></TouchableOpacity>
            <QanelasRegular style={styles.boxTitle}>Student</QanelasRegular>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton text="Next" onPress={nextHandler} />
        </View>
      </View>
    </ScrollWrapper>
    // </View>
  );
};

export default VacancyDetailScreen;
