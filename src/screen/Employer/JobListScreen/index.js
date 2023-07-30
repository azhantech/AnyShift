import React, { useLayoutEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';


import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import { jobOptions, jobs } from '../../../utils/tempData';
import { icons } from '../../../assets/images';
import JobItem from '../../../component/Items/JobItem';
import CustomButton from '../../../component/Buttons/CustomButton';
import InputField from '../../../component/Inputs/InputField';
import { vh } from '../../../utils/dimensions';
import OptionsModal from '../../../component/ModalMessages/OptionsModal';

const JobListScreen = ({ navigation }) => {

    const [optionModal, setOptionModal] = useState(false);

    const onPressModal = () => {
        setOptionModal(!optionModal);
    };

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
        return (
            <JobItem
                item={item}
                optionPress={onPressModal}
                onPress={() =>
                    navigation.navigate('JobDetails', {
                        status: item?.status,
                    })
                }
            />
        );
    };

    const renderEmptyComponent = () => {
        return (
            <View style={styles.emptyComponentViewStyle}>
                <QanelasMedium style={styles.noChatsTextStyle}>
                    No Applications Found
                </QanelasMedium>
            </View>
        );
    };

    const renderList = () => {
        return (
            <FlatList
                data={jobs}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={styles.listStyle}
                contentContainerStyle={styles.contentContainerStyle}
                ListEmptyComponent={renderEmptyComponent}
            />
        );
    };
    return <MainContainer>

        <View style={styles.header}>
            <InputField
                placeholder="Search"
                leftIcon={icons.search}
                inputContainerIcon={styles.inputContainerIcon}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('NotificationScreen');
                }}
                style={[styles.textButton, { marginTop: vh * 1 }]}>
                <Image
                    source={icons.filter}
                    style={styles.notificationsIconStyle}
                />
            </TouchableOpacity>
        </View>
        {renderList()}

        <CustomButton
            onPress={() => navigation.navigate('CreateCompanyScreen')}
            style={styles.button}
            text='create job'
        />

        <OptionsModal
            visible={optionModal}
            onPress={onPressModal}
            onHide={onPressModal}
            options={jobOptions}
        />

    </MainContainer>;
};

export default JobListScreen;
