import React from 'react';
import IdField from '../Components/Idfield';
import PwField from '../Components/Pwfield';
import EmailField from '../Components/Emailfield';
import NameField from '../Components/Namefield';
import PhoneNumberField from '../Components/Phonenumberfield';
import Advertisement from '../Components/Advertisement';
import { Link } from 'react-router-dom';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idValid : false,
      pwValid : false,
      pwConfirmValid : null,
      nameValid : false,
      phoneNumberValid : false,
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
    const submitValid = this.state.idValid && this.state.pwValid && this.state.phoneNumberValid && this.state.pwConfirmValid && this.state.nameValid && this.state.emailValid && this.state.adValid; 
    return (
      <div>
          <div>
           <h1>회원가입</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <IdField id={this.props.id} idValid={this.state.idValid} validChange = {this.validChange} valueChange = {this.props.valueChange} />
              <PwField pw={this.props.pw} pwValid={this.state.pwValid} pwConfirmValid={this.state.pwConfirmValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <NameField pw={this.props.pw} nameValid={this.state.nameValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <PhoneNumberField phoneNumber={this.props.phoneNumber} phoneNumberValid={this.state.phoneNumberValid} validChange = {this.validChange} valueChange = {this.props.valueChange} />
              <EmailField email={this.props.email} emailValid={this.state.emailValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <Advertisement allowAd={this.props.allowAd} adValid={this.state.adValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
          </div>
          <Link to='/complete'><input type="submit" value="submit" disabled={!submitValid} onClick={this.recordTime} /></Link>
        </form>
      </div>
    );
  }
}

export default Form;
