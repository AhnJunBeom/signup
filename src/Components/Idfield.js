import React from 'react';

class Idfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', validation: false};
    this.handleChange = this.handleChange.bind(this);
    this.idcheck = this.idcheck.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  idcheck(props){
    if(props==='ajb931010') {
      //this.setState({validation: false})
      return(
          <p>존재하는 ID입니다.</p>
      );
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            ID : <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="ID를 입력하세요." />
          </label>
        </div>
        <div>
          {this.idcheck(this.state.value)}
        </div>
      </div>
    );
  }
}

export default Idfield;
