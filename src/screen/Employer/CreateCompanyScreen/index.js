import React, { useLayoutEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


import { generalImage, icons } from '../../../assets/images';
import InputField from '../../../component/Inputs/InputField';
import Scrollwrapper from '../../../component/ScrollWrapper';
import { vh, vw } from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
import QanelasBold from '../../../component/Texts/QanelasBold';
import styles from './styles'
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import GeneralModal from '../../../component/ModalMessages/GeneralModal';


const CreateCompanyScreen = props => {

    const [cancelReasonModal, setCancelReasonModal] = useState(false);

    const onHandleCancelReasonModal = () => {
        setCancelReasonModal(!cancelReasonModal);
    };

    return (
        <Scrollwrapper
            style={styles.mainContainer}
            contentContainerStyle={styles.contentContainerStyle}>
            {/* <View style={styles.fieldContainer}> */}
            <InputField label="Company Name" required />
            <InputField label="EIN" required />
            <InputField label="Salutation" />
            <InputField label="First Name" />
            <InputField label="Last Name" />
            <InputField label="Address" />
            <InputField label="Location" />
            <InputField label="Website" />

            <View style={styles.btnContainer}>
                <QanelasRegular style={styles.labelText}>
                    Logo
                </QanelasRegular>
                <TouchableOpacity style={styles.logoButton}>
                    <Image source={icons.upload} style={styles.uploadIcon} />
                    <QanelasBold style={styles.uploadText}>Upload Logo</QanelasBold>
                </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
                <QanelasBold style={styles.cardHeading}>Card Details</QanelasBold>
            </View>
            <InputField label="Card Holder Name" />
            <InputField label="Card Number" />
            <InputField label="Validity Date" />
            <InputField label="CVC Number" />
            {/* </View> */}
            <View style={styles.btn}>
                <CustomButton
                    text="Create"
                    onPress={onHandleCancelReasonModal}
                />
            </View>
            <GeneralModal
                visible={cancelReasonModal}
                onPress={onHandleCancelReasonModal}
                onHide={onHandleCancelReasonModal}
                buttonTitle="Okay"
                icon={icons.success}
                firstDescription="SUCCESS"
                placeholder="Company has been created successfully"
            />
        </Scrollwrapper>
    );
};
export default CreateCompanyScreen;
