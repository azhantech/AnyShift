import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

import styles from './styles';
import HomeCard from '../../../component/Items/HomeCard';
import { homeData } from '../../../utils/data';
import { icons } from '../../../assets/images';


const renderCards = () => {
    return homeData.map((val, i) => <HomeCard key={i} title={val.title} icon={val.icon} />)
}

const HomeScreen = (props) => {

    // useLayoutEffect(() => {
    //     props.navigation.setOptions({
    //         headerBackground: () => {
    //             return (
    //                 <View>
    //                     <HomeCard title='total companies' icon={icons.company} />
    //                     <View style={styles.headerTopContainer}></View>
    //                 </View>
    //             );
    //         },
    //     });
    // });

    return (
        <View style={styles.container}>
            <View style={styles.headerTopContainer}></View>
            {
                renderCards()
            }
        </View>
    )
}

export default HomeScreen