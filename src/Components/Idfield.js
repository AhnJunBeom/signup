import React from 'react';

class Idfield extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.idValidCheck = this.idValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  handleChange(e) {
    this.props.valueChange(e.target.value);
    this.idValidCheck(e.target.value);
  }

  idValidCheck(input){
    if(input==='') {
      this.props.validChange(false);
    }
    else if(input==='ajb931010') {
      this.props.validChange(false);
    }
    else {
      this.props.validChange(true);
    }
  }

  renderValidMessage() {
    if((this.props.valid === false) && (this.props.value !== '')) {
      return (
        <p>존재하는 ID입니다.</p>
      )
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            ID : <input type="text" value={this.props.value} onChange={this.handleChange} placeholder="ID를 입력하세요." />
          </label>
        </div>
        <div>
          {this.renderValidMessage()}
        </div>
      </div>
    );
  }
}

export default Idfield;
