import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import Scrollable from '../../../../component/ScrollWrapper';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import {styles} from './styles';
import InputField from '../../../../component/Inputs/InputField';
import {vh, vw} from '../../../../utils/dimensions';
import CustomButton from '../../../../component/Buttons/CustomButton';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import {icons} from '../../../../assets/images';

const data = [
  {
    title: 'Dashboard',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: true},
      {title: 'View', selected: true},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
  {
    title: 'Job Management',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: true},
      {title: 'View', selected: false},
      {title: 'Update', selected: true},
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
      {title: 'Create', selected: true},
      {title: 'View', selected: true},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
  {
    title: 'Favorites',
    options: [
      {title: 'All', selected: false},
      {title: 'Create', selected: true},
      {title: 'View', selected: true},
      {title: 'Update', selected: false},
      {title: 'Delete', selected: false},
    ],
  },
];

const EditManagerScreen = props => {
  const renderOptions = options => {
    return options.map((val, i) => {
      return (
        <View style={styles.boxContainer} key={i}>
          <TouchableOpacity style={styles.tickBoxViewStyle(val.selected)}>
            {val.selected && (
              <Image source={icons.whiteTick} style={styles.checkIcon} />
            )}
          </TouchableOpacity>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
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
      <InputField placeholder="Enter First Name" label="First Name" required />
      <InputField placeholder="Enter Last Name" label="Last Name" required />
      <InputField
        placeholder="Enter Your Email Address"
        label="Mobile Number"
        required
        keyboardType="number-pad"
      />
      <InputField
        placeholder="Enter Your Email Address"
        label="Email Address"
        required
      />

      <View style={{width: vw * 85, marginVertical: vh * 1}}>
        <QanelasBold style={styles.heading}>Privilages</QanelasBold>
      </View>

      {renderData()}
      <CustomButton
        text="Edit Profile"
        onPress={() => props?.navigation.navigate('DrawerNavigator')}
      />
    </Scrollable>
  );
};

export default EditManagerScreen;
