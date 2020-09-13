import React from 'react';
// You dont need to specify the filetyp with name.js
import RickRolled from '../RickRolled/RickRolled';
import ArturTest from '../ArturTest/ArturTest';

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
