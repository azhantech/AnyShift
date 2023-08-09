import { StyleSheet } from "react-native";


import { colors } from "../../../utils/appTheme";
import { vh, vw } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.white
    },
    button: {
        alignSelf: 'center'
    },
    qr: {
        height: vh * 35, marginVertical: vh * 10,
        width: vw * 90, resizeMode: 'contain',
        alignSelf: 'center'
    }
})

export default styles;