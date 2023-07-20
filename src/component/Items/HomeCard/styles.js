import { StyleSheet } from "react-native";

import { colors, themeShadow } from "../../../utils/appTheme";
import { vh, vw } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: vh * 2,
        borderWidth: 1,
        borderColor: colors.border,
        marginVertical: vh * 1,
        width: vw * 90,
        alignSelf: 'center',
        padding: vh * 3,
        flexDirection: 'row', alignItems: 'center',
        ...themeShadow
    },
    statsRow: {
        flexDirection: 'row', alignItems: 'center'
    },
    bigText: {
        fontSize: vh * 4
    },
    greenText: {
        color: colors.green
    },
    arrow: {
        height: vh * 2, width: vh * 2, resizeMode: 'contain',
        marginHorizontal: vw * 1
    },
    iconContainer: {
        height: vh * 8, width: vh * 8, alignItems: 'center', justifyContent: 'center',
        borderRadius: vh * 1, backgroundColor: colors.lightRed
    },
    icon: {
        height: vh * 3, width: vh * 3, resizeMode: 'contain'
    }
})

export default styles;