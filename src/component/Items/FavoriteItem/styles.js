import { StyleSheet } from "react-native";


import { colors, themeShadow } from "../../../utils/appTheme";
import { vh, vw } from "../../../utils/dimensions";


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: vh * 2, marginVertical: vh * 1, marginHorizontal: vw * 5,
        padding: vh * 2
    },
    profile: {
        height: vh * 9, width: vh * 9, resizeMode: 'contain'
    },
    profileCircle: {
        height: vh * 10, width: vh * 10, borderRadius: vh * 10 / 2, alignItems: 'center', justifyContent: 'center',
        ...themeShadow, backgroundColor: colors.white
    },
    header: {
        flexDirection: 'row', alignItems: 'center'
    },
    name: {
        fontSize: vh * 2.8, marginLeft: vw * 2
    }
})

export default styles;