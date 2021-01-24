import React from 'react';

function Advertisement(props) {

  function handleChange(e) {
    const value = e.target.value;
    props.valueChange(value);
    adValidCheck(value);
  }

  function adValidCheck(input){
    if(input === '') {
      props.validChange(false);
    }
    else {
      props.validChange(true);
    }
  }

  function renderValidMessage() {
    if(!props.adValid) {
      return (
        <p>광고 수신 여부를 선택해주세요.</p>
      )
    }
  }

  return (
    <div>
      <p>광고 메일을 수신하시겠습니까?</p>
      <input type="radio" id="yes" name="adAccess" value="yes" onClick={handleChange} />
      <label for="yes">Yes</label>
      <input type="radio" id="no" name="adAccess" value="no" onClick={handleChange} />
      <label for="no">No</label>
      {renderValidMessage()}
    </div> 
  );
}

export default Advertisement;
