import React from 'react';
import {View, Modal, Image, Animated, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import QanelasSemiBold from '../Texts/QanelasSemiBold';
import CustomButton from '../Buttons/CustomButton';
import {icons} from '../../assets/images';
import InputField from '../Inputs/InputField';
import {vh, vw} from '../../utils/dimensions';
import {colors} from '../../utils/appTheme';
import CustomSlider from '../CustomSlider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const FilterModal = props => {
  console.log('Props ===>', props);
  const handleHide = () => {
    props?.onHide();
    if (props?.hidePress) {
      props?.hidePress();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props?.visible}
      style={{flex: 1, position: 'absolute', margin: 0}}
      animationInTiming={500}
      animationOutTiming={1000}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={1000}
      avoidKeyboard={false}>
      <View style={styles.mainContainerView}>
        <TouchableOpacity
          onPress={() => handleHide()}
          style={styles.mainBlurViewContiner}></TouchableOpacity>
        <View style={[styles.miniContainerView, props?.style]}>
          <View style={styles.headingContainer}>
            <QanelasBold style={styles.headingText}>
              {props?.headerText}
            </QanelasBold>
          </View>
          <TouchableOpacity style={styles.dateContainer}>
            <QanelasRegular style={styles.dateContainer.text}>
              From
            </QanelasRegular>
            <View style={styles.daterow}>
              <View style={styles.daterow.dateTextContainer}>
                <QanelasRegular style={styles.daterow.dateTextContainer.text}>
                  Select Date
                </QanelasRegular>
              </View>
              <View style={styles.daterow.iconContainer}>
                <Image
                  source={icons.calendarIcon}
                  style={styles.daterow.iconContainer.image}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dateContainer}>
            <QanelasRegular style={styles.dateContainer.text}>
              To
            </QanelasRegular>
            <View style={styles.daterow}>
              <View style={styles.daterow.dateTextContainer}>
                <QanelasRegular style={styles.daterow.dateTextContainer.text}>
                  Select Date
                </QanelasRegular>
              </View>
              <View style={styles.daterow.iconContainer}>
                <Image
                  source={icons.calendarIcon}
                  style={styles.daterow.iconContainer.image}
                />
              </View>
            </View>
          </TouchableOpacity>
          {props?.vacancies && (
            <KeyboardAwareScrollView style={{flex: 1}}>
              <View>
                <View style={styles.row}>
                  <View style={styles.row.rightContainer}>
                    <QanelasRegular style={styles.row.text}>
                      State
                    </QanelasRegular>

                    <InputField
                      inputContainerStyle={{
                        width: '100%',
                        marginTop: 0 * vh,
                        justifyContent: 'center',
                      }}
                      inputContainerIcon={{width: '100%', height: '80%'}}
                      secureTextEntry={false}
                    />
                  </View>
                  <View style={styles.row.rightContainer}>
                    <QanelasRegular style={styles.row.text}>
                      City
                    </QanelasRegular>

                    <InputField
                      inputContainerStyle={{
                        width: '100%',
                        marginTop: 0 * vh,
                        justifyContent: 'center',
                      }}
                      inputContainerIcon={{width: '100%', height: '80%'}}
                    />
                  </View>
                </View>

                <View
                  style={[
                    styles.sliderContainer,
                    {
                      height: vh * 12,
                      justifyContent: 'center',
                    },
                  ]}>
                  <QanelasRegular style={styles.row.text}>
                    Zip Code
                  </QanelasRegular>

                  <InputField />
                </View>
                <View style={styles.sliderContainer}>
                  <QanelasRegular style={styles.row.text}>Miles</QanelasRegular>

                  <CustomSlider />
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
          <View style={styles.row}>
            <CustomButton
              text="Cancel"
              style={[
                styles.btn,
                {backgroundColor: 'transparent', borderWidth: 1},
              ]}
              textStyle={{color: colors.black}}
            />
            <CustomButton text="Apply Filter" style={styles.btn} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
