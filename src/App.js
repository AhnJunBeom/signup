import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Complete from './Pages/Complete';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path='/join' component={Form} />
            <Route path='/complete' component={Complete} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
