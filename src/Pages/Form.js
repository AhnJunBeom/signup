import React from 'react';
import Idfield from '../Components/Idfield';
import Pwfield from '../Components/Pwfield';
import Emailfield from '../Components/Emailfield';
import Namefield from '../Components/Namefield';
import Advertisement from '../Components/Advertisement';
import { Link } from 'react-router-dom';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idValid : false,
      pwValid : false,
      pwConfirmValid : false,
      nameValid : false,
      emailValid : false,
      adValid : false
      }
      this.validChange = this.validChange.bind(this);
      this.recordTime = this.recordTime.bind(this);
    }
    validChange(key, value) {
      this.setState({[key] : value});
    }
    recordTime() {
      const d = new Date();
      this.props.valueChange('joinTime', d.toLocaleString());
    }

  render () {
    const submitValid = this.state.idValid && this.state.pwValid && this.state.pwConfirmValid && this.state.nameValid && this.state.emailValid && this.state.adValid; 
    return (
      <div>
          <div>
           <h1>회원가입</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Idfield id={this.props.id} idValid={this.state.idValid} validChange = {this.validChange} valueChange = {this.props.valueChange} />
              <Pwfield pw={this.props.pw} pwValid={this.state.pwValid} pwConfirmValid={this.state.pwConfirmValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <Namefield pw={this.props.pw} nameValid={this.state.nameValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <Emailfield email={this.props.email} emailValid={this.state.emailValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <Advertisement allowAd={this.props.allowAd} adValid={this.state.adValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
          </div>
          <Link to='/complete'><input type="submit" value="submit" disabled={!submitValid} onClick={this.recordTime} /></Link>
        </form>
      </div>
    );
  }
}

export default Form;
