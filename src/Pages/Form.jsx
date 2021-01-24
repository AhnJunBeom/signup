import React, {useState} from 'react';
import IdField from '../Components/Idfield';
import PwField from '../Components/Pwfield';
import EmailField from '../Components/Emailfield';
import NameField from '../Components/Namefield';
import PhoneNumberField from '../Components/Phonenumberfield';
import Advertisement from '../Components/Advertisement';
import { signUp } from "../Actions/Form";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Form(props) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [allowAd, setAllowAd] = useState('');
  const [joinTime, setJoinTime] = useState('');
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwConfirmValid, setPwConfirmValid] = useState(null);
  const [nameValid, setNameValid] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [adValid, setAdValid] = useState(false);
  const [confirmId, setConfirmId] = useState(false);

  const submitValid = confirmId && idValid && pwValid && phoneNumberValid && pwConfirmValid && nameValid && emailValid && adValid; 
  let history = useHistory();

  function submitData(e) {
    e.preventDefault();
    const data = {
        "id": id,
        "password": pw,
        "name": name,
        "phoneAddress": phoneNumber,
        "emailAddress": email,
        "advertisement": allowAd
    }
    fetch('/signup/', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      if(response.ok) {
        const date = new Date();
        setJoinTime(date.toLocaleString());
        props.signUp({id : id, name : name, email : email, joinTime : joinTime});
        history.push("/complete");
      }
      else if(response.status === 400) {
        alert("니문제임");
      }
      else {alert("서버 오류로 회원가입이 실패했습니다." + '\n' + "다시 시도해주세요.");}
    })
  }
  
  return (
    <div>
      <div>
        <h1>회원가입</h1>
      </div>
      <form>
        <div>
          <IdField confirmId={confirmId} id={id} idValid={idValid} valueChange = {setId} validChange = {setIdValid} confirmIdChange = {setConfirmId} />
          <PwField pw={pw} pwValid={pwValid} pwConfirmValid={pwConfirmValid} valueChange = {setPw} validChange = {setPwValid} confirmPwChange = {setPwConfirmValid}/>
          <NameField name={name} nameValid={nameValid} valueChange = {setName} validChange = {setNameValid}/>
          <PhoneNumberField phoneNumber={phoneNumber} phoneNumberValid={phoneNumberValid} valueChange = {setPhoneNumber} validChange = {setPhoneNumberValid} />
          <EmailField email={email} emailValid={emailValid} valueChange = {setEmail} validChange = {setEmailValid}/>
          <Advertisement allowAd={allowAd} adValid={adValid} valueChange = {setAllowAd} validChange = {setAdValid}/>
        </div>
        <input type="submit" value="submit" disabled={!submitValid} onClick={submitData} />
      </form>
    </div>
   );
}

const mapStateToProps = state => ({
  id: state.form.id,
  name: state.form.name,
  email: state.form.email,
  joinTime: state.form.joinTime
});

const mapDispatchToProps = dispatch => ({
  signUp: (userInformation) => {
    dispatch(signUp(userInformation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
