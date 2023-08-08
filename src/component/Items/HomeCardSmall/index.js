import React from 'react'
import { Image, View } from 'react-native'

import styles from './styles'
import QanelasSemiBold from '../../Texts/QanelasSemiBold'
import QanelasBold from '../../Texts/QanelasBold'
import QanelasRegular from '../../Texts/QanelasRegular'
import { icons } from '../../../assets/images'

const HomeCardSmall = ({ title, icon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.circle}>
                    <Image style={styles.icon} source={icon} />
                </View>
                <QanelasBold style={styles.title}>{title}</QanelasBold>
            </View>

            <Image source={icons.rightArrow} style={styles.arrow} />
        </View>
    )
}

export default HomeCardSmall;