import React from 'react';
import { View, Modal, Image, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
import QanelasBold from '../../Texts/QanelasBold';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import CustomButton from '../../Buttons/CustomButton';
import { icons } from '../../../assets/images';
import { colors } from '../../../utils/appTheme';

const OptionsModal = props => {
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
            style={{ flex: 1 }}>
            <View style={styles.mainContainerView}>
                <TouchableOpacity
                    onPress={() => handleHide()}
                    style={styles.mainBlurViewContiner}></TouchableOpacity>
                <View style={[styles.miniContainerView, props?.style]}>


                </View>
            </View>
        </Modal>
    );
};

export default OptionsModal;
