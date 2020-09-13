import React from 'react';

export default class ArturTest extends React.Component {
  render() {
    /* Used external variable value and passed it into React.Fragment
		instead of wrapping it with a div.
		
		The second h1 is a props that gets its data from App.js*/
    const reactFragmentTest = 'Testing with React.Fragment';
    return (
      <React.Fragment>
        <h1>{reactFragmentTest}</h1>;<h1>{this.props.greeting}</h1>
      </React.Fragment>
    );
  }
}
