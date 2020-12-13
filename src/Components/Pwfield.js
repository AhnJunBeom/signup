import React from 'react';

class Pwfield extends React.Component {
  constructor(props) {
    super(props);
    this.pwChange = this.pwChange.bind(this);
    this.pwValidCheck = this.pwValidCheck.bind(this);
    this.pwConfirmValidCheck = this.pwConfirmValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  pwChange(e) {
    this.props.valueChange('pw', e.target.value);
    this.pwValidCheck(e.target.value);
  }

  pwValidCheck(input){
    if(input==='') {
      this.props.validChange('pwValid', false);
    }
    else if((input.length<8) || ((input.match(/[a-z]/g) || []).length === 0) || ((input.match(/[0-9]/g) || []).length === 0)) {
      this.props.validChange('pwValid', false);
    }
    else {
      this.props.validChange('pwValid', true);
    }
  }

  pwConfirmValidCheck(e){
    if(e.target.value === this.props.pw) {
      this.props.validChange('pwConfirmValid', true);
    }
    else {
      this.props.validChange('pwConfirmValid', false);
    }
  }

  renderValidMessage(value, valid) {
    if(value !== '') {
        if(valid === true) {
          return ('v');
        }
        else {
          return ('x');
        }
      }
    }

  render () {
    return (
      <div>
        <div>
          <label>
            pw : <input type="password" value={this.props.pw} onChange={this.pwChange} placeholder="비밀번호를 입력하세요." />
          </label>
          {this.renderValidMessage(this.props.pw, this.props.pwValid )}
        </div>
        <div>
          <label>
            pwc : <input type="password" onChange={this.pwConfirmValidCheck} placeholder="비밀번호 재입력" />
          </label>
        </div>
      </div>
    );
  }
}

export default Pwfield;
