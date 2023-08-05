import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import { generalImage, icons } from '../../../assets/images'
import QanelasBold from '../../Texts/QanelasBold'
import QanelasSemiBold from '../../Texts/QanelasSemiBold'
import { vh, vw } from '../../../utils/dimensions'

const data = [
    { title: 'Last Job Title', value: 'Counter Cashier' },
    { title: 'Rating', value: '4.5 Rating' },
    { title: 'Total Hours Worked', value: '4 Hours' },
    { title: 'No of Cancellation', value: '2' }
]

const FavoriteItem = ({ onPress }) => {

    const renderData = () => {
        return data.map((val, i) => {
            return (
                <View style={{ width: vw * 40, marginVertical: vh * 1 }} key={i}>
                    <QanelasSemiBold>{val.title}</QanelasSemiBold>
                    <QanelasSemiBold>{val.value}</QanelasSemiBold>
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.heartCircle}>
                <Image source={icons.heartFilled} style={styles.heart} />
            </View>
            <View style={styles.header}>
                <View style={styles.profileCircle}>
                    <Image source={generalImage.profile} style={styles.profile} />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <QanelasBold style={styles.name}>James Milner</QanelasBold>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                {
                    renderData()
                }
            </View>
        </View>
    )
}

export default FavoriteItem