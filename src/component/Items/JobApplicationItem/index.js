import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import QanelasBold from '../../Texts/QanelasBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import { generalImage, icons } from '../../../assets/images';
import { vw } from '../../../utils/dimensions';

const JobApplicationItem = props => {
    const { item, onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            activeOpacity={0.8}>
            <View style={styles.row}>
                <View style={styles.imageRow}>
                    <View style={styles.imageContainer}>
                        <Image source={icons.amazon} style={styles.userImage} />
                    </View>
                    <View style={styles.userNameContainer}>
                        <QanelasBold style={styles.userName}>#AL56790</QanelasBold>
                        <QanelasMedium style={styles.profession}>
                            Counter Cashier
                        </QanelasMedium>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: vw * 2 }}>
                    <View style={styles.countContainer}>
                        <QanelasBold style={styles.count}>03</QanelasBold>
                    </View>
                    <TouchableOpacity style={styles.heartFilledViewStyle}>
                        <Image style={styles.arrowIcon} source={icons.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default JobApplicationItem;
