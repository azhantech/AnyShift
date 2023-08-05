import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';


import MainContainer from '../../../../component/MainContainer';
import HalfHeader from '../../../../component/HalfHeader';
import styles from './styles';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import { generalImage, icons } from '../../../../assets/images';
import { vh } from '../../../../utils/dimensions';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import { colors } from '../../../../utils/appTheme';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import ScrollWrapper from '../../../../component/ScrollWrapper';
import { jobDetails, shifts } from '../../../../utils/tempData';
import CustomButton from '../../../../component/Buttons/CustomButton';
import { reviews } from '../../../../utils/tempData';
import ReviewItem from '../../../../component/ReviewItem';
import ShiftItem from '../../../../component/ShiftItem';
import ConfirmationModal from '../../../../component/ModalMessages/ConfirmationModal';

const EmployeeDetailScreen = ({ navigation, route }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [isFavourite, setIsFavourite] = useState(false);
    const [cancelReasonModal, setCancelReasonModal] = useState(false);

    const handleTabChange = index => {
        setSelectedTab(index);
    };

    const onHandleCancelReasonModal = () => {
        setCancelReasonModal(!cancelReasonModal);
    };

    const renderFavIcon = () => {
        if (isFavourite) {
            return icons.heartFilled;
        } else {
            return icons.heartNotFilled;
        }
    };

    const handleFav = () => {
        setIsFavourite(!isFavourite);
    };

    const renderProfile = () => {
        return (
            <View style={styles.mainContainerStyle}>
                <View style={styles.profileImageViewStyle}>
                    <Image style={styles.profileImageStyle} source={icons.amazon} />
                    <View style={styles.statusMainContainerStyle}>
                        <TouchableOpacity onPress={handleFav} style={styles.heartViewStyle}>
                            <Image
                                source={icons.heartFilled}
                                style={styles.onlineIconStyle(isFavourite)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <QanelasBold style={styles.titleTextStyle}>
                    James Milner
                </QanelasBold>
                <QanelasSemiBold style={styles.profession}>Student</QanelasSemiBold>
            </View>
        );
    };

    const renderTitles = () => {
        return (
            <View style={styles.mainTitlesViewStyle}>
                <TouchableOpacity
                    onPress={() => handleTabChange(0)}
                    style={[
                        styles.tabTitleViewStyle,
                        {
                            borderBottomWidth: selectedTab === 0 ? 0.2 * vh : 0,
                            borderBottomColor: selectedTab === 0 ? colors.black : colors.grey,
                        },
                    ]}>
                    <QanelasSemiBold
                        style={[
                            styles.tabTitleTextStyle,
                            {
                                color: selectedTab === 0 ? colors.black : colors.grey,
                            },
                        ]}>
                        Job
                    </QanelasSemiBold>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleTabChange(1)}
                    style={[
                        styles.tabTitleViewStyle,
                        {
                            borderBottomWidth: selectedTab === 1 ? 0.2 * vh : 0,
                            borderBottomColor: selectedTab === 1 ? colors.black : colors.grey,
                        },
                    ]}>
                    <QanelasSemiBold
                        style={[
                            styles.tabTitleTextStyle,
                            {
                                color: selectedTab === 1 ? colors.black : colors.grey,
                            },
                        ]}>
                        Customer
                    </QanelasSemiBold>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleTabChange(2)}
                    style={[
                        styles.tabTitleViewStyle,
                        {
                            borderBottomWidth: selectedTab === 2 ? 0.2 * vh : 0,
                            borderBottomColor: selectedTab === 2 ? colors.black : colors.grey,
                        },
                    ]}>
                    <QanelasSemiBold
                        style={[
                            styles.tabTitleTextStyle,
                            {
                                color: selectedTab === 2 ? colors.black : colors.grey,
                            },
                        ]}>
                        Shifts{' '}
                    </QanelasSemiBold>
                </TouchableOpacity>
            </View>
        );
    };

    const renderContent = () => {
        return (
            <View style={styles.customerContentContainerStyle}>
                <QanelasRegular style={styles.customerContentDescriptionStyle}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
                    minonumy eirmod tempor invidunt ut labore et dolore magna ali quyam
                    erat, sed diam voluptua.
                </QanelasRegular>
                <QanelasRegular style={styles.customerContentDescriptionStyle}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
                    minonumy eirmod tempor invidunt ut labore et dolore magna ali quyam
                    erat, sed diam voluptua.
                </QanelasRegular>
                <CustomButton
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    text="Chat"
                />

                <View style={styles.breakerViewStyle} />

                <QanelasSemiBold style={styles.contentHeadingStyle}>
                    Reviews
                </QanelasSemiBold>

                {reviews?.map((item, index) => (
                    <ReviewItem item={item} />
                ))}
            </View>
        );
    };

    return (
        <MainContainer>
            <HalfHeader />
            {renderProfile()}
            {/* {renderTitles()} */}
            <ScrollWrapper
                style={styles.listStyle}
                contentContainerStyle={styles.contentContainerStyle}>
                {renderContent()}
            </ScrollWrapper>

            <ConfirmationModal
                visible={cancelReasonModal}
                onPress={onHandleCancelReasonModal}
                onHide={onHandleCancelReasonModal}
                yesbuttonTitle="Yes"
                nobuttonTitle="No"
                icon={icons.warning}
                firstDescription="Apply for Job"
                placeholder="Are you sure you want to apply for job?"
            />
        </MainContainer>
    );
};

export default EmployeeDetailScreen;
