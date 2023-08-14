import React from 'react';
import {View, Modal, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import QanelasMedium from '../../Texts/QanelasMedium';

const OptionsModal = props => {
  const handleHide = () => {
    props?.onHide();
    if (props?.hidePress) {
      props?.hidePress();
    }
  };

  const renderOptions = () => {
    return props.options.map((val, i) => {
      return (
        <TouchableOpacity
          style={styles.item}
          key={i}
          activeOpacity={0.7}
          onPress={i == 0 ? props.onPressEdit : handleHide}>
          <Image source={val.icon} style={styles.icon} />
          <QanelasMedium style={styles.title}>{val.title}</QanelasMedium>
        </TouchableOpacity>
      );
    });
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
          {renderOptions()}
        </View>
      </View>
    </Modal>
  );
};

export default OptionsModal;
