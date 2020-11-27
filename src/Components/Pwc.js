import React from 'react';

class Pwc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', validation: true};
    this.handleChange = this.handleChange.bind(this);
    this.pwcheck = this.pwcheck.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  //비밀번호에, 영어, 숫자, 들어갈때 ok, validation : true
  pwcheck(props){
    if(props) {
      if((props.length<8) || ((props.match(/[a-z]/g) || []).length === 0) || ((props.match(/[0-9]/g) || []).length === 0)) {
        return(' X');
      }
      else {
        return(' V');
      }
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            pwc : <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="비밀번호 확인하세요." />
          </label>
          {this.pwcheck(this.state.value)}
        </div>
      </div>
    );
  }
}

export default Pwc;
