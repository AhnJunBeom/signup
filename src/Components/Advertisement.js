import React from 'react';

class Advertisement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', validation: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render(){
    return (
      <div>
        <p>광고 메일을 수신하시겠습니까?</p>
        <input type="radio" id="yes" name="adAccess" value="yes" onclick={this.handleChange} />
        <label for="yes">Yes</label>
        <input type="radio" id="no" name="adAccess" value="no" onclick={this.handleChange} />
        <label for="no">No</label>
        <h1>{this.state.value}</h1>
      </div> 
    );
  }
}

export default Advertisement;
