import React from 'react';
import IdField from '../Components/Idfield';
import PwField from '../Components/Pwfield';
import EmailField from '../Components/Emailfield';
import NameField from '../Components/Namefield';
import PhoneNumberField from '../Components/Phonenumberfield';
import Advertisement from '../Components/Advertisement';
import { signUp } from "../Actions/Form";
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      name : '',
      phoneNumber : '',
      email : '',
      allowAd : '',
      joinTime : '',
      idValid : false,
      pwValid : false,
      pwConfirmValid : null,
      nameValid : false,
      phoneNumberValid : false,
      emailValid : false,
      adValid : false,
      confirmId : null
    }
    this.valueChange = this.valueChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  valueChange(key, value) {
    this.setState({[key] : value});
  }
  submitData(e) {
    e.preventDefault();
    const date = new Date();
    const data = {
        "id": this.state.id,
        "password": this.state.pw,
        "name": this.state.name,
        "phoneAddress": this.state.phoneNumber,
        "emailAddress": this.state.email,
        "advertisement": this.state.allowAd
    }

    fetch('/signup/', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      if(response.ok) {
        this.valueChange('joinTime', date.toLocaleString());
        this.props.signUp(this.state);
        this.props.history.push("/complete");
      }
      else if(response.status === 400) {
        alert("니문제임");
      }
      else {alert("서버 오류로 회원가입이 실패했습니다." + '\n' + "다시 시도해주세요.");}
    })
  }

  render () {
    const submitValid = this.state.confirmId && this.state.idValid && this.state.pwValid && this.state.phoneNumberValid && this.state.pwConfirmValid && this.state.nameValid && this.state.emailValid && this.state.adValid; 
    return (
      <div>
          <div>
           <h1>회원가입</h1>
          </div>
          <form>
            <div>
              <IdField confirmId={this.state.confirmId} id={this.state.id} idValid={this.state.idValid} valueChange = {this.valueChange} />
              <PwField pw={this.state.pw} pwValid={this.state.pwValid} pwConfirmValid={this.state.pwConfirmValid} valueChange = {this.valueChange}/>
              <NameField name={this.state.name} nameValid={this.state.nameValid} valueChange = {this.valueChange}/>
              <PhoneNumberField phoneNumber={this.state.phoneNumber} phoneNumberValid={this.state.phoneNumberValid} valueChange = {this.valueChange} />
              <EmailField email={this.state.email} emailValid={this.state.emailValid} valueChange = {this.valueChange}/>
              <Advertisement allowAd={this.state.allowAd} adValid={this.state.adValid} valueChange = {this.valueChange}/>
          </div>
          <input type="submit" value="submit" disabled={!submitValid} onClick={this.submitData} />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  id: state.form.id,
  pw: state.form.pw,
  name: state.form.name,
  phoneNumber: state.form.phoneNumber,
  email: state.form.email,
  allowAd: state.form.allowAd,
  joinTime: state.form.joinTime
});

const mapDispatchToProps = dispatch => ({
  signUp: (userInformation) => {
    dispatch(signUp(userInformation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
