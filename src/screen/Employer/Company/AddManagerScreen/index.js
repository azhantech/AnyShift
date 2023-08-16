import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';

import Scrollable from '../../../../component/ScrollWrapper';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import {styles} from './styles';
import InputField from '../../../../component/Inputs/InputField';
import {vh, vw} from '../../../../utils/dimensions';
import CustomButton from '../../../../component/Buttons/CustomButton';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';

const data = [
  {
    title: 'Dashboard',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: false},
      {title: 'View', selected: false},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
  {
    title: 'Job Management',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: false},
      {title: 'View', selected: false},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
  {
    title: 'Planning',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: false},
      {title: 'View', selected: false},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
  {
    title: 'Attendance',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: false},
      {title: 'View', selected: false},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
  {
    title: 'Favorites',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: false},
      {title: 'View', selected: false},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
];

const AddManagerScreen = props => {
  const renderOptions = options => {
    return options.map((val, i) => {
      return (
        <View style={styles.boxContainer} key={i}>
          <TouchableOpacity
            style={styles.tickBoxViewStyle()}></TouchableOpacity>
          <QanelasRegular style={styles.boxTitle}>{val.title}</QanelasRegular>
        </View>
      );
    });
  };

  const renderData = () => {
    return data.map((val, i) => {
      return (
        <View style={styles.inputWithIcon} key={i}>
          <QanelasSemiBold style={styles.labelText}>
            {val.title}
          </QanelasSemiBold>
          <View style={styles.optionContainer}>
            {renderOptions(val.options)}
          </View>
        </View>
      );
    });
  };

  return (
    <Scrollable
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainerStyle}>
      <Animated.View
        entering={SlideInRight.duration(2)}
        exiting={SlideOutLeft.duration(2)}>
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
            placeholder="Enter Your Email Address"
            label="Mobile Number"
            required
            keyboardType="number-pad"
          />
        </View>

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
          <></>
        </View>
      </Animated.View>

      <View style={{width: vw * 85, marginVertical: vh * 1}}>
        <QanelasBold style={styles.heading}>Privilages</QanelasBold>
      </View>

      {renderData()}

      <View style={styles.btnContainer}>
        <CustomButton text="Add" style={{marginTop: vh * 3}} />
      </View>
    </Scrollable>
  );
};

export default AddManagerScreen;
