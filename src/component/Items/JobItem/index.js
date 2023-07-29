import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import { colors } from '../../../utils/appTheme';
import { icons } from '../../../assets/images';

const JobItem = props => {
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
        <TouchableOpacity onPress={props?.onPress} style={styles.mainContentContainerStyle}>
            <View style={styles.mainDetailsRowViewStyle}>
                <TouchableOpacity style={styles.dotsCircle} onPress={props.optionPress}>
                    <Image
                        source={icons.dots}
                        style={styles.dots}
                    />
                </TouchableOpacity>
                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Job ID
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        #12345
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
                        Job Title
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        Cashier
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Job Charges
                    </QanelasSemiBold>

                    <QanelasMedium style={[styles.bankInfoValueStyle]}>
                        $100
                    </QanelasMedium>
                </View>
            </View>

            <View style={styles.mainDetailsRowViewStyle}>
                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Total Applications
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        4
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


export default JobItem;
