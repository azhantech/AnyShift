import { StyleSheet } from 'react-native';

import { vh, vw } from '../../../utils/dimensions';
import { colors, themeShadow } from '../../../utils/appTheme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        // borderRadius: vh * 1,
        padding: vh * 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: vh * 0.7,
        marginHorizontal: vw * 2,
        borderBottomColor: colors.greyText,
        borderRadius: 4 * vw,
        // borderBottomWidth: 0.25,
    },
    userImage: {
        height: vh * 7,
        width: vh * 7,
        resizeMode: 'contain',
    },

    onlineIconStyle: {
        resizeMode: 'contain',
        height: vh * 2,
        width: vh * 2,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 1.5 * vh,
    },

    userName: {
        textTransform: 'capitalize',
        fontSize: vh * 2,
        color: colors.black,
        width: 40 * vw,
    },
    dateStyle: {
        color: colors.greyText,
        fontSize: 1.6 * vh,
        lineHeight: 2 * vh,
        width: 75 * vw,
    },
    userNameContainer: {
        marginLeft: vw * 3,
        // width: 60 * vw,
    },
    statusContainer: {
        height: vh * 5,
        justifyContent: 'center',
    },
    statusbtn: {
        height: vh * 3,
        width: vw * 25,
        borderRadius: vh * 4,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        color: colors.white,
        fontSize: vw * 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 90 * vw,
    },

    timeTextStyle: {
        color: colors.lightPlaceHolder,
        fontSize: 1.7 * vh,
        width: 30 * vw,
        textAlign: 'right',
    },

    nameViewStyle: {
        // width: 65 * vw,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    profileImageViewStyle: {
        backgroundColor: colors.white,
        height: vh * 10,
        width: vh * 10,
        borderRadius: (vh * 10) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...themeShadow,
    },

    arrowIcon: {
        resizeMode: 'contain',
        height: 4 * vw,
        width: 4 * vw,
        tintColor: colors.primaryColor,
        transform: [{ rotateX: '360deg' }],
    },

    heartFilledViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    locationViewStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 50 * vw,
    },

    locationIconStyle: {
        resizeMode: 'contain',
        height: 3 * vh,
        width: 3 * vw,
        tintColor: colors.primaryColor,
    },

    locationTextStyle: {
        color: colors.greyText,
        fontSize: 1.3 * vh,
        // width: 20 * vw
    },

    locationDetailsStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    mainLocationViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    amountViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    amountTextStyle: {
        color: colors.myMessageColor,
        fontSize: 1.8 * vh,
        width: 25 * vw,
        textAlign: 'right',
    },
    profession: {
        color: colors.highlightedText,
    },
    imageContainer: {
        backgroundColor: colors.behindProfile, alignItems: 'center', justifyContent: 'center',
        borderRadius: vh * 2, height: vh * 10, width: vw * 20
    },
    countContainer: {
        backgroundColor: colors.myMessageColor, height: vh * 3, width: vh * 3, borderRadius: vh * 3 / 2,
        alignItems: 'center', justifyContent: 'center', marginRight: vw * 2
    },
    count: {
        color: colors.white
    },
    imageRow: {
        flexDirection: 'row', alignItems: 'center'
    }
});

export default styles;
