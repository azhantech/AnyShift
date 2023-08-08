import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Scrollable from '../../../component/ScrollWrapper';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import { styles } from './styles';
import InputField from '../../../component/Inputs/InputField';
import { icons } from '../../../assets/images';
import Picker from '../../../component/Picker';
import { vh, vw } from '../../../utils/dimensions';
import CustomButton from '../../../component/Buttons/CustomButton';
import TouchableText from '../../../component/Buttons/TouchableText';
import { colors } from '../../../utils/appTheme';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';


const RegistrationEmployer = props => {
    const [step, setStep] = useState(1);

    const hanldebtn = () => {
        props.navigation.navigate('SignInScreen');
    };
    const renderStep = () => {
        if (step == 1) {
            return (
                <Animated.View entering={SlideInRight.duration(2)} exiting={SlideOutLeft.duration(2)}>
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
            );
        }
    };

    const renderBackHeader = () => {
        const handleOnPress = () => {
            if (step == 1) {
                props?.navigation.goBack();
            }
        };
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: vw * 80 }}>
                <TouchableOpacity onPress={handleOnPress} style={[styles.textButton]}>
                    <Image source={icons.back} style={styles.backIconStyle} />
                </TouchableOpacity>
                <QanelasBold style={{ fontSize: vh * 3 }}>Sign up</QanelasBold>
                <View />
            </View>
        );
    };
    return (
        <Scrollable
            style={styles.mainContainer}
            contentContainerStyle={styles.contentContainerStyle}>
            {renderBackHeader()}
            {renderStep()}
            <View style={styles.btnContainer}>
                <CustomButton text="Sign up" onPress={hanldebtn} style={{ marginTop: vh * 3 }} />
                <TouchableText text="Back to" touchableText="Login" onPress={() => props?.navigation?.navigate('SignInScreen')} />
            </View>
        </Scrollable>
    );
};

export default RegistrationEmployer;
