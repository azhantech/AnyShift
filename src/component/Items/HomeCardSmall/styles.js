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
    icon: {
        height: vh * 3, width: vh * 3, resizeMode: 'contain', tintColor: colors.drawerColor
    },
    circle: {
        height: vh * 5, width: vh * 5, borderRadius: vh * 5 / 2,
        alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightRed
    },
    arrow: {
        height: vh * 3, width: vh * 3, resizeMode: 'contain',
    },
    title: {
        fontSize: vh * 2, marginLeft: vw * 3, textTransform: 'capitalize', fontWeight: 'bold'
    },
    leftContainer: {
        flexDirection: 'row', alignItems: 'center'
    }
})

export default styles;