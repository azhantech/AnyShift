import { StyleSheet } from 'react-native';

import { vh, vw } from '../../../utils/dimensions';
import { colors } from '../../../utils/appTheme';

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
    icon: {
        height: vh * 6,
        width: vh * 6,
        resizeMode: 'contain'
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
        color: colors.successColor,
        fontSize: 1.6 * vh,
        lineHeight: 2 * vh,
        width: 75 * vw,
    },
    userNameContainer: {
        marginLeft: vw * 3,
        width: 65 * vw
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 90 * vw,
    },
    timeTextStyle: {
        color: colors.lightPlaceHolder,
        fontSize: 1.7 * vh,
        width: 30 * vw,
        textAlign: 'right',
    },
    nameViewStyle: {
        width: 65 * vw,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImageViewStyle: {
        height: 10 * vh,
        backgroundColor: colors.behindProfile,
        borderWidth: 0.2,
        borderColor: colors.grey,
        width: 20 * vw,
        borderRadius: 3 * vw,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartIconStyle: fav => ({
        resizeMode: 'contain',
        height: 4 * vw,
        width: 4 * vw,
        tintColor: fav ? colors.primaryColor : null,
    }),
    heartFilledViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationViewStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 10 * vw,
    },
    locationIconStyle: {
        resizeMode: 'contain',
        height: 3 * vh,
        width: 3 * vw,
        tintColor: colors.primaryColor
    },
    locationTextStyle: {
        color: colors.darkGray,
        fontSize: 1.6 * vh,
        marginLeft: 1 * vw
        // width: 20 * vw
    },
    locationDetailsStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainLocationViewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    amountViewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    amountTextStyle: {
        color: colors.myMessageColor,
        fontSize: 1.8 * vh,
        width: 25 * vw,
        textAlign: 'right'
    },
    owner: {
        color: colors.highlightedText
    }
});

export default styles;