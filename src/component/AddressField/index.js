import React, {Component} from 'react';
import styles from './styles';
import AddressPicker from './AddressPicker';
import TouchableHOC from '../../TouchableHOC';

class AddressField extends Component {
  modalShow = () => {
    if (this.props.disabled) {
      return;
    }

    this.picker.modalShow();
  };

  render() {
    return (
      <TouchableHOC
        onPress={this.modalShow}
        style={[styles.main, this.props.style]}>
        <AddressPicker
          onValueChange={this.props.onValueChange}
          data={[]}
          ref={r => {
            this.picker = r;
          }}
        />
        {this.props.children}
      </TouchableHOC>
    );
  }
}

export default AddressField;
