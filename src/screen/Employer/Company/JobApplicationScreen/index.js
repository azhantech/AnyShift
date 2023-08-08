import React from 'react';
import { View, FlatList } from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import { planning } from '../../../../utils/tempData';
import JobApplicationItem from '../../../../component/Items/JobApplicationItem';

const JobApplicationScreen = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <JobApplicationItem
                item={item}
                onPress={() => navigation.navigate('ReferalCode')}
            />
        );
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
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
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

export default JobApplicationScreen;
