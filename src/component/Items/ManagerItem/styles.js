import { StyleSheet } from "react-native";


import { vh, vw } from "../../../utils/dimensions";
import { colors, themeShadow } from "../../../utils/appTheme";

const styles = StyleSheet.create({
    mainContentContainerStyle: {
        marginVertical: 1 * vh,
        width: 90 * vw,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 2 * vw,
        paddingVertical: 2 * vh,
        ...themeShadow,
    },
    mainDetailsRowViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 5 * vw,
        marginTop: 1.5 * vh,
        marginBottom: 1.5 * vh,
    },
    profileDetailsSubRowOne: {
        justifyContent: 'center',
        width: 45 * vw,
    },
    bankInfoHeadingStyle: {
        color: colors.anotherBlackColor,
        fontSize: 1.8 * vh,
        textTransform: 'capitalize',
    },
    bankInfoValueStyle: {
        color: colors.darkGray,
        fontSize: 1.6 * vh,
        textTransform: 'capitalize',
    },
    profileDetailsSubRowSecond: {
        justifyContent: 'center',
        width: 45 * vw,
    },
    bankInfoHeadingStyle: {
        color: colors.anotherBlackColor,
        fontSize: 1.8 * vh,
        textTransform: 'capitalize',
    },
    bankInfoValueStyle: {
        color: colors.darkGray,
        fontSize: 1.6 * vh,
        textTransform: 'capitalize',
    },
    statusViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.warningColor,
        width: 18 * vw,
        borderRadius: 4 * vw,
    },
    statusTextStyle: {
        fontSize: 1.6 * vh,
        color: colors.white,
        textTransform: 'capitalize',
    },
    dotsCircle: {
        height: vh * 5, width: vh * 5, alignItems: 'center', justifyContent: 'center',
        borderRadius: vh * 5 / 2, backgroundColor: colors.screenBackgroundColor, position: 'absolute',
        right: vw * 3, top: -vh * 2, zIndex: 99999
    },
    dots: {
        height: vh * 2, width: vh * 2, resizeMode: 'contain'
    },
    statusText: {
        textTransform: 'capitalize'
    },
    statusContainer: {
        width: vw * 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    switchContainer: {
        backgroundColor: colors.successColor, borderRadius: vh * 2
    }
});

export default styles;