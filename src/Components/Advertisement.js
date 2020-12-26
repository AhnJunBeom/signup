import React from 'react';

class Advertisement extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.adValidCheck = this.adValidCheck.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.valueChange('allowAd', value);
    this.adValidCheck(value);
  }

  adValidCheck(input){
    if(input === '') {
      this.props.validChange('adValid', false);
    }
    else {
      this.props.validChange('adValid', true);
    }
  }

  renderValidMessage() {
    if(!this.props.adValid) {
      return (
        <p>광고 수신 여부를 선택해주세요.</p>
      )
    }
  }

  render(){
    return (
      <div>
        <p>광고 메일을 수신하시겠습니까?</p>
        <input type="radio" id="yes" name="adAccess" value="yes" onClick={this.handleChange} />
        <label for="yes">Yes</label>
        <input type="radio" id="no" name="adAccess" value="no" onClick={this.handleChange} />
        <label for="no">No</label>
        {this.renderValidMessage()}
      </div> 
    );
  }
}

export default Advertisement;
