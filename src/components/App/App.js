import React from 'react';
import RickRolled from '../RickRolled/RickRolled.js';
import ArturTest from '../ArturTest/ArturTest.js';

import './App.css';

export default class App extends React.Component {
  render() {
    const greeting = 'Welcome to React';
    return (
      <div className='component-app'>
        <RickRolled />
        <ArturTest Greeting={greeting} />
      </div>
    );
  }
}
