import React from 'react';
import Idfield from './Components/Idfield';
import Pwfield from './Components/Pwfield';
import Pwc from './Components/Pwc';
import Emailfield from './Components/Emailfield';
import Namefield from './Components/Namefield';
import Advertisement from './Components/Advertisement';

class App extends React.Component {

  render () {
    return (
      <div>
        <div>
          <h1>회원가입</h1>
        </div>
        <div>
          <Idfield />
          <Pwfield />
          <Pwc />
          <Namefield />
          <Emailfield />
          <Advertisement />
        </div>
      </div>
    );
  }
}

export default App;
