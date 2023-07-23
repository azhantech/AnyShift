import React from 'react'
import { Image, View } from 'react-native'

import styles from './styles'
import QanelasSemiBold from '../../Texts/QanelasSemiBold'
import QanelasBold from '../../Texts/QanelasBold'
import QanelasRegular from '../../Texts/QanelasRegular'
import { icons } from '../../../assets/images'

const HomeCard = ({ title, icon }) => {
    return (
        <View style={styles.container}>
            <View>
                <QanelasSemiBold style={styles.title}>
                    {title}
                </QanelasSemiBold>
                <QanelasBold style={styles.bigText}>125</QanelasBold>
                <View style={styles.statsRow}>
                    <QanelasRegular style={styles.greenText}>10%</QanelasRegular>
                    <Image source={icons.arrowUp} style={styles.arrow} />
                    <QanelasRegular style={styles.greenText}>Since Last Month</QanelasRegular>
                </View>
            </View>

            <View style={styles.iconContainer}>
                <Image source={icon} style={styles.icon} />
            </View>
        </View>
    )
}

export default HomeCard