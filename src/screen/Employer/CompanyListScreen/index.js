import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';


import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import QanelasBold from '../../../component/Texts/QanelasBold';
import { vacancies } from '../../../utils/tempData';
import VacancyItem from '../../../component/VacancyItem';
import { icons } from '../../../assets/images';
import { vh, vw } from '../../../utils/dimensions';
import { colors } from '../../../utils/appTheme';
import CompanyItem from '../../../component/Items/CompanyItem';
import CustomButton from '../../../component/Buttons/CustomButton';


const CompanyListScreen = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <CompanyItem
                onPress={() => navigation.navigate('VacancyJobDetails')}
                item={item}
            />
        );
    };


    const renderEmptyComponent = () => {
        return (
            <View style={styles.emptyComponentViewStyle}>
                <QanelasMedium style={styles.noChatsTextStyle}>
                    No Vacancies Available
                </QanelasMedium>
            </View>
        );
    };

    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 11]}
                renderItem={renderItem}
                style={styles.flatListStyle}
                contentContainerStyle={styles.contentContainerStyle}
                ListEmptyComponent={renderEmptyComponent}
                showsVerticalScrollIndicator={false}
            />

            <CustomButton
                onPress={() => navigation.navigate('CreateCompanyScreen')}
                style={styles.button}
                text='create company'
            />

        </MainContainer>
    );
};

export default CompanyListScreen;
