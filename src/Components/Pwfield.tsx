import React from 'react';

interface Props {
  pw: string,
  pwValid: boolean,
  pwConfirmValid: boolean | null,
  valueChange: Function,
  validChange: Function,
  confirmPwChange: Function
}

function PwField(props: Props) {

  function pwChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    props.valueChange(value);
    pwValidCheck(value);
  }

  function pwValidCheck(input : string){
    if(input === '') {
      props.validChange(false);
    }
    else if((input.length<8) || ((input.match(/[a-z]/g) || []).length === 0) || ((input.match(/[0-9]/g) || []).length === 0)) {
      props.validChange(false);
    }
    else {
      props.validChange(true);
    }
  }

  function pwConfirmValidCheck(e: React.ChangeEvent<HTMLInputElement>){
    const value = e.target.value;
    if(value === '') {
      props.confirmPwChange(null);
    }
    else if(value === props.pw) {
      props.confirmPwChange(true);
    }
    else {
      props.confirmPwChange(false);
    }
  }

  function renderValidMessage(value : string, valid : boolean) {
    if(value !== '') {
      if(valid === true) {
        return ('v');
      }
      else {
        return ('x');
      }
    }
  }
  function renderValidMessagePwc() {
    if (props.pwConfirmValid !== null) {
      if (props.pwConfirmValid === true) { return ('v'); }
      else {return ('x');}
    }
  }

    return (
      <div>
        <div>
          <label>
            pw : <input type="password" value={props.pw} onChange={pwChange} placeholder="비밀번호를 입력하세요." />
          </label>
          {renderValidMessage(props.pw, props.pwValid )}
        </div>
        <div>
          <label>
            pwc : <input type="password" onChange={pwConfirmValidCheck} placeholder="비밀번호 재입력" />
          </label>
          {renderValidMessagePwc()}
        </div>
      </div>
    );
}

export default PwField;
