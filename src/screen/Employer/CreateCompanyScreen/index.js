import React, { useLayoutEffect } from 'react';
import { View, Image } from 'react-native';
import { Styles } from './styles';
import { generalImage, icons } from '../../../assets/images';
import InputField from '../../../component/Inputs/InputField';
import Scrollwrapper from '../../../component/ScrollWrapper';
import { vh } from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';


const CreateCompanyScreen = props => {
    return (
        <Scrollwrapper
            style={Styles.mainContainer}
            contentContainerStyle={Styles.contentContainerStyle}>
            {/* <View style={Styles.fieldContainer}> */}
            <InputField label="Company Name" required />
            <InputField label="EIN" required />
            <InputField label="Salutation" />
            <InputField label="First Name" />
            <InputField label="Last Name" />
            <InputField label="Address" />
            <InputField label="Location" />
            <InputField label="Website" />

            <InputField label="Card Holder Name" />
            <InputField label="Card Number" />
            <InputField label="Validity Date" />
            <InputField label="CVC Number" />
            {/* </View> */}
            <View style={Styles.btn}>
                <CustomButton text="Create" />
            </View>
        </Scrollwrapper>
    );
};
export default CreateCompanyScreen;
