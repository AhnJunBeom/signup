import React from 'react';

interface Props {
  phoneNumber: string,
  phoneNumberValid: boolean,
  valueChange: Function,
  validChange: Function,
}

function PhoneNumberField(props: Props) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
        props.valueChange(value);
    }
    phoneValidCheck(value);
  }

  function phoneValidCheck(input: string){
    if(((input.match(/[0-9]/g) || []).length === 0)) {
      props.validChange(false);
    }
    else {
      props.validChange(true);
    }
  }

  return (
    <div>
      <div>
        <label>
          PhoneNumber : <input type="text" value={props.phoneNumber} onChange={handleChange} placeholder="-없이 입력하세요." />
        </label>
      </div>
    </div>
  );
}

export default PhoneNumberField;