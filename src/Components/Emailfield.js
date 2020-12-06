import React from 'react';

class Emailfield extends React.Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emailValidCheck = this.emailValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  handleChange(e) {
    this.props.valueChange(e.target.value);
    this.emailValidCheck(e.target.value);
  }

  emailValidCheck(input){
    if(input==='') {
      this.props.validChange(false);
    }
    else if((input.match('@') || []).length === 0) {
      this.props.validChange(false);
    }
    else {
      this.props.validChange(true);
    }
  }

  renderValidMessage() {
    if((this.props.valid === false) && (this.props.value !== '')) {
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
            email : <input type="text" value={this.props.value} onChange={this.handleChange} placeholder="이메일을 입력하세요." />
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
