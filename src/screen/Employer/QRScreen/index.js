import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import CustomButton from '../../../component/Buttons/CustomButton'
import { generalImage, icons } from '../../../assets/images'

const QRScreen = () => {
    return (
        <View style={styles.container}>

            <Image source={generalImage.qr} style={styles.qr} />

            <CustomButton text='Print' icon={icons.print} style={styles.button} />
        </View>
    )
}

export default QRScreen