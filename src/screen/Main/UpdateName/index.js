import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import InputField from '../../../component/Inputs/InputField';
import CustomButton from '../../../component/Buttons/CustomButton';
import {styles} from './styles';
import ScrollWrapper from '../../../component/ScrollWrapper';
import GeneralModal from '../../../component/ModalMessages/GeneralModal';
import {icons} from '../../../assets/images';
const UpdateName = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const nickNameRef = useRef(null);

  const [cancelReasonModal, setCancelReasonModal] = useState(false);

  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };

  return (
    <ScrollWrapper avoidKeyboard>
      <View style={styles.mainContainer}>
        <View style={styles.fieldContainer}>
          <InputField
            label="First Name"
            placeholder="Enter First Name"
            required
            reference={firstNameRef}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <InputField
            label="Last Name"
            placeholder="Enter Last Name"
            required
            reference={lastNameRef}
            onSubmitEditing={() => nickNameRef.current.focus()}
          />
          <InputField
            label="Nick Name"
            placeholder="Enter Nick Name"
            optional
            reference={nickNameRef}
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
        placeholder="Profile updated successfully"
      />
    </ScrollWrapper>
  );
};
export default UpdateName;
