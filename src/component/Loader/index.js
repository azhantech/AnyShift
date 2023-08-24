import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator, Modal, View} from 'react-native';
import { selectLoader } from '../../redux/LoaderSlice';
import { colors } from '../../utils/appTheme';

const Loader = () => {
  const loader = useSelector(selectLoader);
  return (
    <Modal
      animationType="fade"
      style={{flex: 1}}
      transparent={true}
      visible={loader}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(114,124,142,0.5)',
        }}>
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    </Modal>
  );
};

export default Loader;
