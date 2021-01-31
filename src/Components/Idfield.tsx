import React from 'react';

interface Props {
  confirmId: boolean,
  id: string,
  idValid: boolean,
  valueChange: Function,
  validChange: Function,
  confirmIdChange: Function
}

function IdField(props: Props) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    props.valueChange(value);
    props.confirmIdChange(null);
    props.validChange(false);
  }

  function idConfirm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const url = 'http://ec2-18-221-142-60.us-east-2.compute.amazonaws.com:3000/signup/id?id=' + props.id;
    fetch(url, {method: "POST"})
    .then(response => {
      console.log(response.ok);
      if(response.ok) {
        props.confirmIdChange(true);
        props.validChange(true);
      }
      else {
        props.confirmIdChange(false);
        props.validChange(false);
        alert("존재하는 ID입니다.");
      }
    })
  }
  
  function renderMessage() {
    if(props.id !== '') {
      if(props.confirmId === null) {return('중복확인을 해주세요');}
      else if(props.confirmId === true) {return('사용할 수 있는 ID입니다.');}
      else {return('사용이 불가능한 ID입니다.');}
    }
  }

    return (
      <div>
        <div>
          <label>
            ID : <input type="text" value={props.id} onChange={handleChange} placeholder="ID를 입력하세요." />
          </label>
          <button onClick={idConfirm} disabled={props.id===''}>중복확인</button>
        </div>
        <div>
          {renderMessage()}
        </div>
      </div>
    );
}

export default IdField;
