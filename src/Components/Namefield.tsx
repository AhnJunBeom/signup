import React from 'react';

interface Props {
  name: string,
  nameValid: boolean,
  valueChange: Function,
  validChange: Function,
}

function NameField(props: Props) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    props.valueChange(value);
    nameValidCheck(value);
  }

  function nameValidCheck(input: string){
    if(input==='') {
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
          Name : <input type="text" value={props.name} onChange={handleChange} placeholder="이름을 입력하세요." />
        </label>
      </div>
    </div>
  );
}

export default NameField;