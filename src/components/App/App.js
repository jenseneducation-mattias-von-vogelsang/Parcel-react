import React from 'react';
// You dont need to specify the filetyp with name.js
import RickRolled from '../RickRolled/RickRolled';
import ClassComponentTest from '../ClassComponentTest/ClassComponentTest';
import FunctionComponentTest from '../FunctionComponentTest/FunctionComponentTest';

import './App.css';

export default class App extends React.Component {
  render() {
    const greeting = 'This is a prop to child component';
    return (
      <div className='component-app'>
        <RickRolled />
        <ClassComponentTest Greeting={greeting} />
        <FunctionComponentTest />
      </div>
    );
  }
}
