import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Complete from './Pages/Complete';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      name : '',
      phoneNumber : '',
      email : '',
      allowAd : '',
      joinTime : ''
    }
    this.valueChange = this.valueChange.bind(this);
  }
  valueChange(key, value) {
    this.setState({[key] : value});
  }

  render () {
    return (
      <div>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/join">
                <Form id = {this.state.id} pw = {this.state.pw} name = {this.state.name} phoneNumber={this.state.phoneNumber} email = {this.state.email}
                      joinTime = {this.state.joinTime} allowAd = {this.state.allowAd} valueChange = {this.valueChange} />
            </Route>
            <Route path="/complete">
                <Complete id = {this.state.id} name = {this.state.name} email = {this.state.email} joinTime = {this.state.joinTime} />
            </Route>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
