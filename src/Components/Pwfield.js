import React from 'react';

class Pwfield extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.pwValidCheck = this.pwValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  handleChange(e) {
    this.props.valueChange(e.target.value);
    this.pwValidCheck(e.target.value);
  }

  pwValidCheck(input){
    if(input==='') {
      this.props.validChange(false);
    }
    else if((input.length<8) || ((input.match(/[a-z]/g) || []).length === 0) || ((input.match(/[0-9]/g) || []).length === 0)) {
      this.props.validChange(false);
    }
    else {
      this.props.validChange(true);
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
            pw : <input type="password" value={this.props.value} onChange={this.handleChange} placeholder="비밀번호를 입력하세요." />
          </label>
          {this.renderValidMessage()}
        </div>
      </div>
    );
  }
}

export default Pwfield;
