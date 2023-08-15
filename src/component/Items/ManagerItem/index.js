import React, { useState } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import { colors } from '../../../utils/appTheme';

const ManagerItem = props => {
    const item = props?.item;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleStatusColor = () => {
        if (item.status == 'upcoming') {
            return colors.warningColor;
        }

        if (item.status == 'active') {
            return colors.successColor;
        }

        if (item.status == 'ended') {
            return colors.primaryColor;
        }

        return colors.darkGray;
    };

    const getStatusColor = () => {
        if (item.status == 'active') {
            return colors.successColor
        }
        else {
            return colors.primaryColor
        }
    }

    return (
        <TouchableOpacity
            onPress={props?.onPress}
            style={styles.mainContentContainerStyle}
            activeOpacity={0.7}
        >
            <View style={styles.mainDetailsRowViewStyle}>

                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Manager Name
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        Connie Williams
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Status
                    </QanelasSemiBold>

                    <View style={styles.statusContainer}>
                        <QanelasSemiBold style={[styles.statusText, { color: getStatusColor() }]}>{item.status}</QanelasSemiBold>
                        <View style={[styles.switchContainer, { backgroundColor: getStatusColor() }]}>
                            <Switch
                                trackColor={{ false: 'transparent', true: 'transparent' }}
                                thumbColor={isEnabled ? colors.white : colors.white}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    {/* <View
                        style={[
                            styles.statusViewStyle,
                            {
                                backgroundColor: handleStatusColor(),
                            },
                        ]}>
                        <QanelasSemiBold style={styles.statusTextStyle}>
                            {item.status}
                        </QanelasSemiBold>
                    </View> */}
                </View>
            </View>

            <View style={styles.mainDetailsRowViewStyle}>
                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Email
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        Info@email.com
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Creation Date
                    </QanelasSemiBold>

                    <QanelasMedium style={[styles.bankInfoValueStyle]}>
                        05/12/2023
                    </QanelasMedium>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ManagerItem;
