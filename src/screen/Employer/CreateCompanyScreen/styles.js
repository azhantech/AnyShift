import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const containerWidth = vw * 90;

export const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    contentContainerStyle: {
        alignItems: 'center',
    },
    headerMainContainer: {
        height: vh * 35,

        alignItems: 'center',
        width: vw * 100,
        backgroundColor: colors.screenBackgroundColor,
    },
    fieldContainer: {
        height: vh * 50,
        width: containerWidth,
        justifyContent: 'space-around',
        marginTop: vh * 25,
        alignItems: 'center',
    },
    btn: {
        height: vh * 14,
        justifyContent: 'center',
    },
});
