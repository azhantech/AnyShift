import React, {useState, useRef} from 'react';
import {View} from 'react-native';

import InputField from '../../../../../component/Inputs/InputField';
import CustomButton from '../../../../../component/Buttons/CustomButton';
import {styles} from './styles';
import ScrollWrapper from '../../../../../component/ScrollWrapper';
import GeneralModal from '../../../../../component/ModalMessages/GeneralModal';
import {icons} from '../../../../../assets/images';

const UpdateBankDetailScreen = () => {
  const accountNumberRef = useRef(null);
  const ibanNumberRef = useRef(null);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);

  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };

  return (
    <ScrollWrapper avoidKeyboard>
      <View style={styles.mainContainer}>
        <View style={styles.fieldContainer}>
          <InputField
            label="Card Holder Name"
            placeholder="Enter Card Holder Name"
            reference={accountNumberRef}
            onSubmitEditing={() => ibanNumberRef.current.focus()}
          />
          <InputField
            label="Card Number"
            placeholder="Enter Card Number"
            maxlenght={24}
            keyboardType="numeric"
            reference={ibanNumberRef}
            onSubmitEditing={onHandleCancelReasonModal}
          />
          <InputField
            label="Validity Date"
            placeholder="Enter Validity Date"
            reference={accountNumberRef}
            onSubmitEditing={() => ibanNumberRef.current.focus()}
          />
          <InputField
            label="CVC Number"
            placeholder="Enter CVC Number"
            maxlenght={24}
            keyboardType="numeric"
            reference={ibanNumberRef}
            onSubmitEditing={onHandleCancelReasonModal}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={onHandleCancelReasonModal}
            text="Change Details"
          />
        </View>
      </View>

      <GeneralModal
        visible={cancelReasonModal}
        onPress={onHandleCancelReasonModal}
        onHide={onHandleCancelReasonModal}
        buttonTitle="Okay"
        icon={icons.success}
        firstDescription="SUCCESS"
        placeholder="Bank details updated successfully"
      />
    </ScrollWrapper>
  );
};
export default UpdateBankDetailScreen;
