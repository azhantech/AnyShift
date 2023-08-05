import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import { colors } from '../../../utils/appTheme';
import { icons } from '../../../assets/images';

const AttendanceItem = props => {
    const item = props?.item;

    const getColor = () => {
        if (item.rejected) {
            return colors.rejectRed
        }
        if (item.accepted) {
            return colors.lightGreen
        }
        return colors.white
    }


    return (
        <View style={[styles.mainContentContainerStyle, { backgroundColor: getColor() }]}>
            <View style={styles.mainDetailsRowViewStyle}>
                {
                    item.options &&
                    <TouchableOpacity style={styles.dotsCircle} onPress={props.optionPress}>
                        <Image
                            source={icons.edit}
                            style={styles.dots}
                        />
                    </TouchableOpacity>
                }

                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Date
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        05/12/2023
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Employee Name
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        James Milner
                    </QanelasMedium>
                </View>
            </View>

            <View style={styles.mainDetailsRowViewStyle}>
                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Job Name
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        Counter Cashier
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Planned Hours
                    </QanelasSemiBold>

                    <QanelasMedium style={[styles.bankInfoValueStyle]}>
                        12:00 - 20:00
                    </QanelasMedium>
                </View>
            </View>

            <View style={styles.mainDetailsRowViewStyle}>
                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Working Hours
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        12:00 - 20:00
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Total Time
                    </QanelasSemiBold>

                    <QanelasMedium style={[styles.bankInfoValueStyle]}>
                        8 hour
                    </QanelasMedium>
                </View>
            </View>

            <View style={styles.mainDetailsRowViewStyle}>
                <View style={styles.profileDetailsSubRowOne}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Hours Difference
                    </QanelasSemiBold>

                    <QanelasMedium style={styles.bankInfoValueStyle}>
                        0 hour
                    </QanelasMedium>
                </View>

                <View style={styles.profileDetailsSubRowSecond}>
                    <QanelasSemiBold style={styles.bankInfoHeadingStyle}>
                        Cost
                    </QanelasSemiBold>

                    <QanelasMedium style={[styles.bankInfoValueStyle]}>
                        $200
                    </QanelasMedium>
                </View>
            </View>

            {
                item.options &&
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.tickCircle} activeOpacity={0.7}><Image source={icons.complete} style={styles.icon} /></TouchableOpacity>
                    <TouchableOpacity style={styles.crossCircle} activeOpacity={0.7}><Image source={icons.cross} style={styles.icon} /></TouchableOpacity>
                </View>
            }


        </View>
    );
};


export default AttendanceItem;
