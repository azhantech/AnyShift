import React, {useState, useRef} from 'react';
import {View} from 'react-native';

import InputField from '../../../../component/Inputs/InputField';
import CustomButton from '../../../../component/Buttons/CustomButton';
import {styles} from './styles';
import ScrollWrapper from '../../../../component/ScrollWrapper';
import GeneralModal from '../../../../component/ModalMessages/GeneralModal';
import {icons} from '../../../../assets/images';

const UpdatePasswordScreen = () => {
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmNewPasswordRef = useRef(null);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);

  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };

  return (
    <ScrollWrapper avoidKeyboard>
      <View style={styles.mainContainer}>
        <View style={styles.fieldContainer}>
          <InputField
            label="Current Password"
            placeholder="Enter Current Password"
            required
            secureTextEntry
            reference={currentPasswordRef}
            onSubmitEditing={() => newPasswordRef.current.focus()}
          />
          <InputField
            label="New Password"
            placeholder="Enter New Password"
            required
            secureTextEntry
            reference={newPasswordRef}
            onSubmitEditing={() => confirmNewPasswordRef.current.focus()}
          />
          <InputField
            label="Confirm New Password"
            placeholder="Confirm New Password"
            required
            secureTextEntry
            reference={confirmNewPasswordRef}
            onSubmitEditing={onHandleCancelReasonModal}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton onPress={onHandleCancelReasonModal} text="Update" />
        </View>
      </View>

      <GeneralModal
        visible={cancelReasonModal}
        onPress={onHandleCancelReasonModal}
        onHide={onHandleCancelReasonModal}
        buttonTitle="Okay"
        icon={icons.success}
        firstDescription="SUCCESS"
        placeholder="Password updated successfully"
      />
    </ScrollWrapper>
  );
};
export default UpdatePasswordScreen;
