import {
  Image,
  ImageBackground,
  Modal,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {vh, vw} from '../../../utils/dimensions';
import {BlurView} from '@react-native-community/blur';
import DatePicker from 'react-native-date-picker';
import OutfitMedium from '../../../component/Texts/QanelasMedium';
import {colors} from '../../../utils/appTheme';
import moment from 'moment';
import styles from './styles';

class DatePickerPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: '',
      dateSelected: new Date(),
    };
  }
  setNewDate = newDate => {
    this.setState({
      dateSelected: new Date(newDate),
    });
    // console.log(newDate, 'newDate')
  };
  show = () => {
    this.setState(prev => {
      return {
        ...prev,
        visible: true,
      };
    });
  };

  hide = () => {
    this.setState(prev => {
      return {
        ...prev,
        visible: false,
      };
    });

    // if (this.props.onCancel) {
    //   this.props.onCancel();
    // }
  };

  // _onYes = () => {
  //   this.hide();

  //   // if (this.props.onYes) {
  //   //   this.props.onYes();
  //   // }
  // };
  confirmDate = () => {
    this.hide();
    if (this.props.onYes) {
      this.props.onYes(this.state.dateSelected);
    }
    // console.log(this.state.dateSelected)
  };

  render() {
    console.log('this.state.dateSelected: ', this.state.dateSelected);
    return (
      <Modal
        key="DatePickerPopUp"
        visible={this.state.visible}
        style={styles.container}
        animationType={'slide'}
        transparent={true}>
        <TouchableOpacity onPress={this.hide}>
          <BlurView
            style={styles.backDrop}
            blurType="dark"
            blurAmount={8}
            reducedTransparencyFallbackColor="white"
          />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          {/* <TouchableOpacity onPress={this.hide} style={styles.crossContainer}> */}
          {/* <Image source={icons.cross} /> */}
          <View
            style={{
              width: vw * 86,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: vh * 2,
              backgroundColor: colors.lightThemeColor,
            }}>
            <TouchableOpacity onPress={() => this.hide()}>
              <OutfitMedium style={{color: colors.white}}>Cancel</OutfitMedium>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.confirmDate()}>
              <OutfitMedium style={{color: colors.white}}>Confirm</OutfitMedium>
            </TouchableOpacity>
          </View>
          <DatePicker
            date={this.state.dateSelected}
            onDateChange={date => this.setNewDate(date)}
            textColor={colors.white}
            fadeToColor={'none'}
            mode={this.props?.date && 'date'}
            minimumDate={
              this.props?.minimumDate && new Date(moment().format('YYYY-MM-DD'))
            }
          />
        </View>
      </Modal>
    );
  }
}
export default DatePickerPopUp;
