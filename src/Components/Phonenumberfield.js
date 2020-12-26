import React from 'react';

class PhoneNumberField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.phoneValidCheck = this.phoneValidCheck.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
        this.props.valueChange('phoneNumber', value);
    }
    this.phoneValidCheck(value);
  }

  phoneValidCheck(input){
    if(((input.match(/[0-9]/g) || []).length === 0)) {
      this.props.validChange('phoneNumberValid', false);
    }
    else {
      this.props.validChange('phoneNumberValid', true);
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            PhoneNumber : <input type="text" value={this.props.phoneNumber} onChange={this.handleChange} placeholder="-없이 입력하세요." />
          </label>
        </div>
      </div>
    );
  }
}

export default PhoneNumberField;