import React from 'react'
import { View } from 'react-native'

import styles from './styles';
import HomeCard from '../../../component/Items/HomeCard';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HomeCard />
        </View>
    )
}

export default HomeScreen