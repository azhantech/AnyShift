import { StyleSheet } from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';
const styles = StyleSheet.create({
    container: {
        width: vw * 100,
        height: vh * 8,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // borderTopLeftRadius: vh * 3,
        // borderTopRightRadius: vh * 3,
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderTopColor: colors.borderTopColor
    },
    tabItem: {
        alignItems: 'center',
        height: 5 * vh,
        width: 22 * vw,
        justifyContent: 'center',
    },
    icon: (focused) => ({
        height: vh * 3,
        width: vh * 3,
        resizeMode: 'contain',
        tintColor: focused ? colors.blackappText : colors.tabPlaceHolderColor
    }),
    titleColorStyle: (focused) => ({
        color: focused ? colors.drawerColor : colors.tabPlaceHolderColor,
        fontSize: 1.2 * vh,
        textTransform: 'uppercase'
        // width: 15 * vw,
    }),
    activeTabColorStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
        backgroundColor: colors.activeTabColor,
        // backgroundColor: 'red',
        height: 5 * vh,
        width: 22 * vw,
        borderRadius: 1 * vw,
    },
});

export default styles;
