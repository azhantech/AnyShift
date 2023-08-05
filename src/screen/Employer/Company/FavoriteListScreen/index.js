import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import { planning, planningHeader } from '../../../../utils/tempData';
import PlanningItem from '../../../../component/PlanningItem';
import { icons } from '../../../../assets/images';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import { vh, vw } from '../../../../utils/dimensions';
import { colors } from '../../../../utils/appTheme';
import FavoriteItem from '../../../../component/Items/FavoriteItem';


const FavoriteListScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
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
        return <FavoriteItem item={item} onPress={() => navigation.navigate('EmployeeDetailScreen')} />;
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

    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
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

export default FavoriteListScreen;
