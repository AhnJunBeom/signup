import React from 'react';
import Idfield from './Components/Idfield';
import Pwfield from './Components/Pwfield';
import Pwc from './Components/Pwc';
import Emailfield from './Components/Emailfield';
import Namefield from './Components/Namefield';
import Advertisement from './Components/Advertisement';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idValue : '',
      pwValue : '',
      pwcValue : '',
      nameValue : '',
      emailValue : '',
      adValue : '',
      idValid : false,
      pwValid : false,
      pwcValid : false,
      nameValid : false,
      emailValid : false,
      adValid : false,
      submitValid : false
    }
    this.idValueChange = this.idValueChange.bind(this);
    this.idValidChange = this.idValidChange.bind(this);
    this.pwValueChange = this.pwValueChange.bind(this);
    this.pwValidChange = this.pwValidChange.bind(this);
    this.pwcValueChange = this.pwcValueChange.bind(this);
    this.pwcValidChange = this.pwcValidChange.bind(this);
    this.nameValueChange = this.nameValueChange.bind(this);
    this.nameValidChange = this.nameValidChange.bind(this);
    this.emailValueChange = this.emailValueChange.bind(this);
    this.emailValidChange = this.emailValidChange.bind(this);
    this.adValueChange = this.adValueChange.bind(this);
    this.adValidChange = this.adValidChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(
      "ID : " + this.state.idValue + "\n" +
      "pw : " + this.state.pwValue + "\n" +
      "name : " + this.state.nameValue + "\n" +
      "email : " + this.state.emailValue + "\n" +
      "adreceive : " + this.state.adValue
    );
    event.preventDefault();
  }

  idValueChange(input) {
    this.setState({idValue : input});
  }
  idValidChange(input) {
    this.setState({idValid : input});
  }

  pwValueChange(input) {
    this.setState({pwValue : input});
  }
  pwValidChange(input) {
    this.setState({pwValid : input});
  }

  pwcValueChange(input) {
    this.setState({pwcValue : input});
  }
  pwcValidChange(input) {
    this.setState({pwcValid : input});
  }

  nameValueChange(input) {
    this.setState({nameValue : input});
  }
  nameValidChange(input) {
    this.setState({nameValid : input});
  }

  emailValueChange(input) {
    this.setState({emailValue : input});
  }
  emailValidChange(input) {
    this.setState({emailValid : input});
  }

  adValueChange(input) {
    this.setState({adValue : input});
  }
  adValidChange(input) {
    this.setState({adValid : input});
  }

  render () {
    return (
      <div>
          <div>
           <h1>회원가입</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Idfield value={this.state.idValue} valid={this.state.idValid} valueChange={this.idValueChange} validChange={this.idValidChange} />
              <Pwfield value={this.state.pwValue} valid={this.state.pwValid} valueChange={this.pwValueChange} validChange={this.pwValidChange}/>
              <Pwc value={this.state.pwcValue} valid={this.state.pwcValid} correctPw={this.state.pwValue} valueChange={this.pwcValueChange} validChange={this.pwcValidChange}/>
              <Namefield value={this.state.nameValue} valid={this.state.nameValid} valueChange={this.nameValueChange} validChange={this.nameValidChange}/>
              <Emailfield value={this.state.emailValue} valid={this.state.emailValid} valueChange={this.emailValueChange} validChange={this.emailValidChange}/>
              <Advertisement value={this.state.adValue} valid={this.state.adValid} valueChange={this.adValueChange} validChange={this.adValidChange}/>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
