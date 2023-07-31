import { StyleSheet } from 'react-native';

import { vh, vw } from '../../../../utils/dimensions';
import { colors } from '../../../../utils/appTheme';
const containerWidth = vw * 90;

const styles = StyleSheet.create({
    flatListStyle: {
        flex: 1,
    },
    headerRight: {
        width: vw * 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 8 * vw,
        height: 8 * vw,
        borderRadius: 8 * vw,
    },
    notificationsIconStyle: {
        resizeMode: 'contain',
        height: 4 * vh,
        width: 4 * vw,
        tintColor: colors.primaryColor
    },
});

export default styles;
