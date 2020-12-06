import React from 'react';

class Pwc extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.pwcValidCheck = this.pwcValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  handleChange(e) {
    this.props.valueChange(e.target.value);
    this.pwcValidCheck(e.target.value);
  }

  pwcValidCheck(input){
    if(input==='') {
      this.props.validChange(false);
    }
    else if(input === this.props.correctPw) {
      this.props.validChange(true);
    }
    else {
      this.props.validChange(false);
    }
  }

  renderValidMessage() {
    if(this.props.value !== '') {
        if(this.props.valid === true)
        {
          return ('v');
        }
        else
        {
          return ('x');
        }
      }
    }

  render () {
    return (
      <div>
        <div>
          <label>
            pwc : <input type="password" value={this.props.value} onChange={this.handleChange} placeholder="비밀번호 확인." />
          </label>
          {this.renderValidMessage()}
        </div>
      </div>
    );
  }
}

export default Pwc;
