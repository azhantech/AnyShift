import React from 'react';
import {View, Modal, Image, Animated, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasBold from '../../Texts/QanelasBold';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import CustomButton from '../../Buttons/CustomButton';
import {icons} from '../../../assets/images';
import {colors} from '../../../utils/appTheme';

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
          style={styles.mainBlurViewContiner}></TouchableOpacity>
        <View style={[styles.miniContainerView, props?.style]}>
          <View style={[styles.warningIconView]}>
            <Animated.Image
              source={props?.icon ? props?.icon : icons.warning}
              style={[styles.warningIconStyle]}
            />
          </View>

          <View style={styles.textDescriptionView}>
            <QanelasBold style={styles.textStyle}>
              {props?.firstDescription}
            </QanelasBold>

            {props?.placeholder && (
              <QanelasSemiBold style={styles.placeholderTextStyle}>
                {props?.placeholder}
              </QanelasSemiBold>
            )}

            {props?.secondDescription && (
              <QanelasSemiBold style={styles.textStyle}>
                {props?.secondDescription}
              </QanelasSemiBold>
            )}

            <CustomButton
              onPress={props?.onPress}
              style={[styles.CustomButtonStyle, props?.buttonStyle]}
              text={props?.buttonTitle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GeneralModal;
