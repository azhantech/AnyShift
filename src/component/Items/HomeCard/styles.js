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
        paddingHorizontal: vw * 8,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        ...themeShadow
    },
    statsRow: {
        flexDirection: 'row', alignItems: 'center'
    },
    bigText: {
        fontSize: vh * 4, fontWeight: 'bold'
    },
    greenText: {
        color: colors.green
    },
    arrow: {
        height: vh * 2, width: vh * 2, resizeMode: 'contain',
        marginHorizontal: vw * 1
    },
    iconContainer: {
        height: vh * 7, width: vh * 7, alignItems: 'center', justifyContent: 'center',
        borderRadius: vh * 1, backgroundColor: colors.lightRed
    },
    icon: {
        height: vh * 3, width: vh * 3, resizeMode: 'contain'
    },
    title: {
        textTransform: 'capitalize'
    }
})

export default styles;