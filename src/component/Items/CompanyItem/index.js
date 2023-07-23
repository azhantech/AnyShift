import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


import styles from './styles';
import QanelasBold from '../../Texts/QanelasBold';
import QanelasRegular from '../../Texts/QanelasRegular';
import QanelasMedium from '../../Texts/QanelasMedium';
import { icons } from '../../../assets/images';

const CompanyItem = props => {
    const { item, onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            activeOpacity={0.8}>
            <View style={styles.row}>
                <View style={styles.profileImageViewStyle}>
                    <Image source={icons.amazon} style={styles.icon} />
                </View>

                <View style={styles.userNameContainer}>
                    <View style={styles.nameViewStyle}>
                        <QanelasBold style={styles.userName}>Amazon Inc</QanelasBold>
                    </View>
                    <QanelasMedium style={styles.owner}>Alvin Aaric</QanelasMedium>

                    <View style={styles.locationDetailsStyle}>
                        <View style={styles.mainLocationViewStyle}>
                            <View style={styles.locationViewStyle}>
                                <Image
                                    source={icons.location}
                                    style={styles.locationIconStyle}
                                />

                                <QanelasMedium style={styles.locationTextStyle}>
                                    Texas
                                </QanelasMedium>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CompanyItem;
