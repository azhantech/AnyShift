import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

import Scrollable from '../../../../component/ScrollWrapper';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import { styles } from './styles';
import InputField from '../../../../component/Inputs/InputField';
import { vh, vw } from '../../../../utils/dimensions';
import CustomButton from '../../../../component/Buttons/CustomButton';
import QanelasRegular from '../../../../component/Texts/QanelasRegular';
import QanelasSemiBold from '../../../../component/Texts/QanelasSemiBold';
import { icons } from '../../../../assets/images';

const data = [
    {
        title: 'Dashboard',
        options: [
            { title: 'All', selected: false },
            { title: 'Create', selected: true },
            { title: 'View', selected: true },
            { title: 'Update', selected: false },
            { title: 'Delete', selected: false }
        ]
    },
    {
        title: 'Job Management',
        options: [
            { title: 'All', selected: false },
            { title: 'Create', selected: true },
            { title: 'View', selected: false },
            { title: 'Update', selected: true },
            { title: 'Delete', selected: false }
        ]
    },
    {
        title: 'Planning',
        options: [
            { title: 'All', selected: false },
            { title: 'Create', selected: false },
            { title: 'View', selected: false },
            { title: 'Update', selected: false },
            { title: 'Delete', selected: false }
        ]
    },
    {
        title: 'Attendance',
        options: [
            { title: 'All', selected: false },
            { title: 'Create', selected: true },
            { title: 'View', selected: true },
            { title: 'Update', selected: false },
            { title: 'Delete', selected: false }
        ]
    },
    {
        title: 'Favorites',
        options: [
            { title: 'All', selected: false },
            { title: 'Create', selected: true },
            { title: 'View', selected: true },
            { title: 'Update', selected: false },
            { title: 'Delete', selected: false }
        ]
    }
]

const headerData = [
    { title: 'First Name', value: 'James' },
    { title: 'Last Name', value: 'Milner' },
    { title: 'Mobile Number', value: '26467911312' },
    { title: 'Email Address', value: 'info@email.com' }
]

const ManagerDetailScreen = props => {

    const renderOptions = (options) => {
        return options.map((val, i) => {
            return (
                <View style={styles.boxContainer} key={i}>
                    <TouchableOpacity style={styles.tickBoxViewStyle(val.selected)}>
                        {val.selected && (
                            <Image source={icons.whiteTick} style={styles.checkIcon} />
                        )}
                    </TouchableOpacity>
                    <QanelasRegular style={styles.boxTitle}>{val.title}</QanelasRegular>
                </View>
            )
        })
    }

    const renderData = () => {
        return data.map((val, i) => {
            return (
                <View style={styles.inputWithIcon} key={i}>
                    <QanelasSemiBold style={styles.labelText}>{val.title}</QanelasSemiBold>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', }}>
                        {renderOptions(val.options)}
                    </View>
                </View>
            )
        })
    }

    const renderHeader = () => {
        return headerData.map(val => {
            return (
                <View style={{ width: vw * 40, marginVertical: vh * 3 }}>
                    <QanelasRegular>{val.title}</QanelasRegular>
                    <QanelasSemiBold>{val.value}</QanelasSemiBold>
                </View>
            )
        })
    }

    return (
        <Scrollable
            style={styles.mainContainer}
            contentContainerStyle={styles.contentContainerStyle}>

            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', width: vw * 90, justifyContent: 'center' }}>
                {
                    renderHeader()
                }
            </View>

            <View style={{ width: vw * 85, marginVertical: vh * 1 }}>
                <QanelasBold style={styles.heading}>Privilages</QanelasBold>
            </View>

            {renderData()}
        </Scrollable>
    );
};

export default ManagerDetailScreen;
