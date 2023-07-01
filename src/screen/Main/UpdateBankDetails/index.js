import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';
import {styles} from './styles';
import ScrollWrapper from '../../../component/ScrollWrapper';
import GeneralModal from '../../../component/ModalMessages/GeneralModal';
import {icons} from '../../../assets/images';
const UpdateBankDetails = () => {
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
            label="Account Holder Name"
            placeholder="Enter Account Holder Name"
            required
            reference={accountNumberRef}
            onSubmitEditing={() => ibanNumberRef.current.focus()}
          />
          <InputField
            label="IBAN Number"
            placeholder="Enter IBAN Number"
            maxlenght={24}
            keyboardType="numeric"
            required
            reference={ibanNumberRef}
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
        placeholder="Bank details updated successfully"
      />
    </ScrollWrapper>
  );
};
export default UpdateBankDetails;
