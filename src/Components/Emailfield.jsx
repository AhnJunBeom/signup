import React from 'react';

function EmailField(props) {

  function handleChange(e) {
    const value = e.target.value;
    props.valueChange( value);
    emailValidCheck(value);
  }

  function emailValidCheck(input){
    if(input === '') {
      props.validChange(false);
    }
    else if((input.match('@') || []).length === 0) {
      props.validChange(false);
    }
    else {
      props.validChange(true);
    }
  }

  function renderValidMessage() {
    if((props.emailValid === false) && (props.email !== '')) {
      return (
        <p>형식이 잘못되었습니다.</p>
      )
    }
  }
  return (
    <div>
      <div>
        <label>
          email : <input type="text" value={props.email} onChange={handleChange} placeholder="이메일을 입력하세요." />
        </label>
      </div>
      <div>
        {renderValidMessage()}
      </div>
    </div>
  );
}

export default EmailField;
