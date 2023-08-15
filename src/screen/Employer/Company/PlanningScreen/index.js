import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import { planning, planningHeader } from '../../../../utils/tempData';
import PlanningItem from '../../../../component/PlanningItem';
import { icons } from '../../../../assets/images';
import { vh, vw } from '../../../../utils/dimensions';
import { colors } from '../../../../utils/appTheme';


const PlanningScreen = ({ navigation }) => {

    const renderHeaderData = () => {
        return planningHeader.map((val, i) => {
            return (
                <View style={styles.row} key={i}>
                    <QanelasMedium style={styles.headerText}>{val.title}</QanelasMedium>
                    <View style={{ width: vw * 20 }}>
                        <QanelasMedium style={styles.headerText}>{val.value}</QanelasMedium>
                    </View>
                </View>
            )
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackground: () => {
                return (
                    <View style={styles.headerMainContainer}>
                        <View
                            style={{
                                height: vh * 10,
                                width: vw * 90,
                                justifyContent: 'center',
                            }}>
                            <CalendarStrip
                                scrollable
                                style={{
                                    height: '100%', width: '100%'
                                }}
                                calendarColor={'red'}
                                calendarHeaderStyle={{
                                    color: 'white',
                                }}
                                dateNumberStyle={{ color: 'white' }}
                                dateNameStyle={{ color: 'white' }}
                                iconContainer={{ flex: 0.1 }}
                                iconLeftStyle={{ tintColor: 'white' }}
                                iconRightStyle={{ tintColor: 'white' }}
                                highlightDateNumberContainerStyle={{
                                    backgroundColor: colors.white,
                                    borderRadius: 4 * vw,
                                    height: 7 * vw,
                                    width: 7 * vw,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </View>
                        <View style={{ width: vw * 80, marginVertical: vh * 1 }}>
                            {
                                renderHeaderData()
                            }
                        </View>
                    </View>
                );
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('NotificationScreen');
                            }}
                            style={styles.textButton}>
                            <Image
                                source={icons.tab4}
                                style={styles.notificationsIconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('NotificationScreen');
                            }}
                            style={styles.textButton}>
                            <Image
                                source={icons.notification}
                                style={styles.notificationsIconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                );
            },
        });
    });

    const renderItem = ({ item }) => {
        return <PlanningItem item={item} />;
    };

    const renderEmptyComponent = () => {
        return (
            <View style={styles.emptyComponentViewStyle}>
                <QanelasMedium style={styles.noChatsTextStyle}>
                    No Planning Available
                </QanelasMedium>
            </View>
        );
    };

    // const ListHeaderComponent = () => {
    //     return (
    //         <View style={styles.ListHeaderComponent}>
    //             <View style={styles.ListHeaderComponent.leftContainer}>
    //                 <QanelasRegular style={styles.text}>Job Status</QanelasRegular>
    //                 <View
    //                     style={styles.ListHeaderComponent.leftContainer.dropDownContainer}>
    //                     <QanelasRegular>Pending</QanelasRegular>
    //                     <TouchableOpacity
    //                         style={
    //                             styles.ListHeaderComponent.leftContainer.dropDownContainer.btn
    //                         }>
    //                         <Image
    //                             source={icons.dropDown}
    //                             style={
    //                                 styles.ListHeaderComponent.leftContainer.dropDownContainer.btn
    //                                     .image
    //                             }
    //                         />
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         </View>
    //     );
    // };

    return (
        <MainContainer>
            <FlatList
                data={planning}
                renderItem={renderItem}
                style={styles.flatListStyle}
                contentContainerStyle={styles.contentContainerStyle}
                ListEmptyComponent={renderEmptyComponent}
                showsVerticalScrollIndicator={false}
            // ListHeaderComponent={ListHeaderComponent}
            />
        </MainContainer>
    );
};

export default PlanningScreen;
