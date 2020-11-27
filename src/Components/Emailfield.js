import React from 'react';

class Emailfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', validation: false};
    this.handleChange = this.handleChange.bind(this);
    this.emailcheck = this.emailcheck.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  emailcheck(email){
    if(email){
        if((email.match('@') || []).length === 0)
        {
            return(
                <p>형식이 잘못되었습니다.</p>
            );
        }
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            email : <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="이메일을 입력하세요." />
          </label>
        </div>
        <div>
          {this.emailcheck(this.state.value)}
        </div>
      </div>
    );
  }
}

export default Emailfield;
