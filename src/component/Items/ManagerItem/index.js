import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import { colors } from '../../../utils/appTheme';

const ManagerItem = props => {
    const item = props?.item;

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

    return (
        <TouchableOpacity
            onPress={props?.onPress}
            style={styles.mainContentContainerStyle}>
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

                    <View
                        style={[
                            styles.statusViewStyle,
                            {
                                backgroundColor: handleStatusColor(),
                            },
                        ]}>
                        <QanelasSemiBold style={styles.statusTextStyle}>
                            {item.status}
                        </QanelasSemiBold>
                    </View>
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
