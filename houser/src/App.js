import React, { Component } from 'react';
import { HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
