import React from 'react';

class Emailfield extends React.Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emailValidCheck = this.emailValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  handleChange(e) {
    this.props.valueChange('email', e.target.value);
    this.emailValidCheck(e.target.value);
  }

  emailValidCheck(input){
    if(input==='') {
      this.props.validChange('emailValid', false);
    }
    else if((input.match('@') || []).length === 0) {
      this.props.validChange('emailValid',false);
    }
    else {
      this.props.validChange('emailValid',true);
    }
  }

  renderValidMessage() {
    if((this.props.emailvalid === false) && (this.props.email !== '')) {
      return (
        <p>형식이 잘못되었습니다.</p>
      )
    }
  }
  render () {
    return (
      <div>
        <div>
          <label>
            email : <input type="text" value={this.props.email} onChange={this.handleChange} placeholder="이메일을 입력하세요." />
          </label>
        </div>
        <div>
          {this.renderValidMessage()}
        </div>
      </div>
    );
  }
}

export default Emailfield;
