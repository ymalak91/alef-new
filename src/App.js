import React, { Component } from 'react';

import Col from './components/Col';

import './index.css';



class App extends Component {

  componentDidMount() {
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Col />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
