import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../utils/dimensions';
import { colors } from '../../../utils/appTheme';

const styles = StyleSheet.create({
    flatListStyle: {
        flex: 1,
    },

    contentContainerStyle: {
        width: 100 * vw,
        paddingBottom: 10 * vh,
        marginTop: 2 * vh,
    },

    emptyComponentViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30 * vh,
    },

    noChatsTextStyle: {
        fontSize: 2 * vh,
        color: colors.darkGray,
        textAlign: 'center',
        textTransform: 'capitalize',
    },

    headingViewStyle: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    headingTextStyle: {
        color: colors.black,
        fontSize: 2.4 * vh,
        textAlign: 'left',
        textTransform: 'capitalize',
    },

    allOptionsViewStyle: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        width: 30 * vw
    },

    mainHeaderViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 90 * vw,
        alignSelf: 'center',
        height: vh * 8,
    },

    optionIconStyle: {
        resizeMode: 'contain',
        height: 4 * vw,
        width: 4 * vw,
    },

    optionButtonStyle: {
        backgroundColor: colors.white,
        height: 8 * vw,
        width: 8 * vw,
        borderRadius: 4 * vw,
        justifyContent: 'center',
        alignItems: 'center',
    },
    renderCarouselItem: {
        height: vh * 50,
        width: vw * 80,
        backgroundColor: colors.white,
        borderRadius: vh * 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    imageContainer: {
        height: '70%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: vh * 2,
        alignItems: 'center',
        backgroundColor: '#F7F3ED',
        image: {
            height: '90%',
            width: '90%',
            resizeMode: 'contain',
        },
    },
    detailsContainer: {
        height: '20%',
        width: '90%',
        justifyContent: 'space-between',
    },
    row: {
        height: '30%',
        width: '100%',
    },
    heartIconStyle: fav => ({
        resizeMode: 'contain',
        height: 4 * vw,
        width: 4 * vw,
        tintColor: fav ? colors.primaryColor : null,
    }),
    nameViewStyle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userName: {
        textTransform: 'capitalize',
        fontSize: vh * 1.7,
        color: colors.black,
        width: '70%',
    },
    heartFilledViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: vh * 10,
        backgroundColor: colors.myMessageColor
    }
});

export default styles;
