import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

import styles from './styles';
import { homeDataCompany, homeDataCompanySmall } from '../../../../utils/data';
import HomeCard from '../../../../component/Items/HomeCard';
import HomeCardSmall from '../../../../component/Items/HomeCardSmall';


const renderCards = () => {
    return homeDataCompany.map((val, i) => <HomeCard key={i} title={val.title} icon={val.icon} />)
}

const renderSmallCards = () => {
    return homeDataCompanySmall.map((val, i) => <HomeCardSmall key={i} title={val.title} icon={val.icon} />)
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
            {
                renderSmallCards()
            }
        </View>
    )
}

export default HomeScreen