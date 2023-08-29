import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors, themeShadow} from '../../utils/appTheme';
import QanelasSemiBold from '../Texts/QanelasSemiBold';
import QanelasMedium from '../Texts/QanelasMedium';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import {icons} from '../../assets/images';
import moment from 'moment';

const ShiftItem = props => {
  const [selected, setSelected] = useState(false);
  const renderSelected = () => {
    if (selected) {
      return icons.whiteTick;
    }
  };

  const handleSelected = item => {
    props?.setId(item?.id);
    setSelected(!selected);
  };
  // console.log('id ========>', id);
  const item = props?.item;

  if (props?.selectable) {
    return (
      <View style={styles.mainContentContainerStyle}>
        <TouchableOpacity
          onPress={() => handleSelected(item)}
          style={styles.mainTickContainerStyle}>
          <View style={styles.tickViewStyle(selected)}>
            <Image style={styles.tickIconStyle} source={renderSelected()} />
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.timeContainerStyle,
            {
              width: 40 * vw,
              marginLeft: 5 * vw,
            },
          ]}>
          <QanelasBold style={styles.dateTextStyle}>
            {moment(item?.date).format('dddd DD MMM, YYYY')}
          </QanelasBold>

          <View style={styles.rowContainerStyle}>
            <QanelasRegular style={styles.fromStyle}>
              From {moment(item?.from1).format('HH:MM a')}
            </QanelasRegular>
            <QanelasRegular style={styles.toStyle}>
              To {moment(item?.to1).format('HH:MM a')}
            </QanelasRegular>
          </View>

          <View style={styles.breakerViewStyle} />

          <View style={styles.rowContainerStyle}>
            <QanelasRegular style={styles.fromStyle}>
              From {moment(item?.to1).format('HH:MM a')}
            </QanelasRegular>
            <QanelasRegular style={styles.toStyle}>
              To {moment(item?.to2).format('HH:MM a')}
            </QanelasRegular>
          </View>
        </View>

        <View
          style={[
            styles.amountViewStyle,
            {
              borderWidth: 0,
              borderColor: 'transparent',
            },
          ]}>
          <QanelasSemiBold style={styles.amountTextStyle}>
            {item?.amount}
          </QanelasSemiBold>
        </View>
      </View>
    );
  }
  return (
    <View onPress={props?.onPress} style={styles.mainContentContainerStyle}>
      <View style={styles.timeContainerStyle}>
        <QanelasBold style={styles.dateTextStyle}>{item?.date}</QanelasBold>

        <View style={styles.rowContainerStyle}>
          <QanelasRegular style={styles.fromStyle}>
            From {item?.from1}
          </QanelasRegular>
          <QanelasRegular style={styles.toStyle}>To {item?.to1}</QanelasRegular>
        </View>

        <View style={styles.breakerViewStyle} />

        <View style={styles.rowContainerStyle}>
          <QanelasRegular style={styles.fromStyle}>
            From {item?.to1}
          </QanelasRegular>
          <QanelasRegular style={styles.toStyle}>To {item?.to2}</QanelasRegular>
        </View>
        <View
          style={[
            styles.rowContainerStyle,
            {
              marginTop: 1.5 * vh,
            },
          ]}>
          <QanelasRegular style={styles.fromStyle}>Checkin Time</QanelasRegular>
          <QanelasRegular style={styles.toStyle}>
            {item?.checkinTime}
          </QanelasRegular>
        </View>
        <View style={styles.breakerViewStyle} />
        <View style={styles.rowContainerStyle}>
          <QanelasRegular style={styles.fromStyle}>
            Checkout Time
          </QanelasRegular>
          <QanelasRegular style={styles.toStyle}>
            {item?.checkoutTime}
          </QanelasRegular>
        </View>
      </View>

      <View style={styles.amountViewStyle}>
        <QanelasSemiBold style={styles.amountTextStyle}>
          {item?.amount}
        </QanelasSemiBold>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContentContainerStyle: {
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
    width: 90 * vw,
    // justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 2 * vw,
    paddingVertical: 2 * vh,
    flexDirection: 'row',
    padding: 4 * vw,
    ...themeShadow,
  },

  rowContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0.5 * vh,
    width: 40 * vw,
    justifyContent: 'space-between',
  },

  fromStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
  },

  toStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    marginLeft: 5 * vw,
  },

  dateTextStyle: {
    color: colors.black,
    fontSize: 1.8 * vh,
    textTransform: 'capitalize',
    marginBottom: 1.5 * vh,
  },

  amountViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30 * vw,
    borderLeftWidth: 0.1 * vw,
    borderColor: colors.grey,
  },

  amountTextStyle: {
    color: colors.highlightedText,
    fontSize: 2.9 * vh,
  },

  timeContainerStyle: {
    width: 50 * vw,
  },

  breakerViewStyle: {
    justifyContent: 'center',
    width: 40 * vw,
    borderWidth: 0.04 * vw,
    borderColor: colors.grey,
  },

  tickViewStyle: selected => ({
    backgroundColor: selected ? colors.primaryColor : colors.white,
    borderRadius: 1 * vw,
    height: 6 * vw,
    width: 6 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: selected ? colors.primaryColor : colors.darkGray,
    borderWidth: 0.2,
  }),

  tickIconStyle: {
    resizeMode: 'contain',
    height: 3 * vw,
    width: 3 * vw,
  },

  mainTickContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 10 * vw,
  },
});
export default ShiftItem;
