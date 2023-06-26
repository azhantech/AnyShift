import React from 'react';
import {View, Modal, Image, Animated, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasMedium from '../../Texts/QanelasMedium';
import CustomButton from '../../Buttons/CustomButton';
import {icons} from '../../../assets/images';

const GeneralModal = props => {
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
      style={{flex: 1}}>
      <View style={styles.mainContainerView}>
        <TouchableOpacity
          onPress={() => handleHide()}
          style={styles.mainBlurViewContiner}>
        </TouchableOpacity>
        <View style={[styles.miniContainerView, props?.style]}>
          <View style={[styles.warningIconView]}>
            <Animated.Image
              source={props?.icon ? props?.icon : icons.warning}
              style={[styles.warningIconStyle]}
            />
          </View>

          <View style={styles.textDescriptionView}>
            <QanelasMedium style={styles.textStyle}>
              {props?.firstDescription}
            </QanelasMedium>

            {props?.placeholder && (
              <QanelasMedium style={styles.placeholderTextStyle}>
                {props?.placeholder}
              </QanelasMedium>
            )}

            {props?.secondDescription && (
              <QanelasMedium style={styles.textStyle}>
                {props?.secondDescription}
              </QanelasMedium>
            )}
          </View>

          <View style={styles.CustomButtonView}>
            <CustomButton
              onPress={props?.onPress}
              style={[styles.CustomButtonStyle, props?.buttonStyle]}
              color={props?.buttonTextColor}
              title={props?.buttonTitle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GeneralModal;
