import React from 'react';

class SignupButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.nameValidCheck = this.nameValidCheck.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.valueChange('name', value);
    this.nameValidCheck(value);
  }

  nameValidCheck(input){
    if(input==='') {
      this.props.validChange('nameValid', false);
    }
    else {
      this.props.validChange('nameValid', true);
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            Name : <input type="text" value={this.props.name} onChange={this.handleChange} placeholder="이름을 입력하세요." />
          </label>
        </div>
      </div>
    );
  }
}

export default SignupButton;