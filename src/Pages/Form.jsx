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
      adValid : false,
      confirmId : ''
    }
    this.validChange = this.validChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  validChange(key, value) {
    this.setState({[key] : value});
  }
  submitData(e) {
    e.preventDefault();
    const date = new Date();
    const data = {
        "id": this.props.id,
        "password": this.props.pw,
        "name": this.props.name,
        "phoneAddress": this.props.phoneNumber,
        "emailAddress": this.props.email,
        "advertisement": this.props.allowAd
    }

    fetch('/signup/', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      if(response.ok) {
        console.log(response.status);
        this.props.valueChange('joinTime', date.toLocaleString());
        //Complete로 링크타는거 넣을거임
      }
      else if(response.status === 400) {
        alert("니문제임");
      }
      else {alert("서버 오류로 회원가입이 실패했습니다." + '\n' + "다시 시도해주세요.");}
    })
  }

  render () {
    const submitValid = (this.props.id === this.state.confirmId) && this.state.idValid && this.state.pwValid && this.state.phoneNumberValid && this.state.pwConfirmValid && this.state.nameValid && this.state.emailValid && this.state.adValid; 
    return (
      <div>
          <div>
           <h1>회원가입</h1>
          </div>
          <form>
            <div>
              <IdField confirmId={this.state.confirmId} id={this.props.id} idValid={this.state.idValid} validChange = {this.validChange} valueChange = {this.props.valueChange} />
              <PwField pw={this.props.pw} pwValid={this.state.pwValid} pwConfirmValid={this.state.pwConfirmValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <NameField pw={this.props.pw} nameValid={this.state.nameValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <PhoneNumberField phoneNumber={this.props.phoneNumber} phoneNumberValid={this.state.phoneNumberValid} validChange = {this.validChange} valueChange = {this.props.valueChange} />
              <EmailField email={this.props.email} emailValid={this.state.emailValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
              <Advertisement allowAd={this.props.allowAd} adValid={this.state.adValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
          </div>
          <input type="submit" value="submit" disabled={!submitValid} onClick={this.submitData} />
        </form>
      </div>
    );
  }
}

export default Form;
