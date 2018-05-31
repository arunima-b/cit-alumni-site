import React, { Component } from 'react';
import { Image, Menu, Header, Segment } from 'semantic-ui-react';

import ErrorBoundary from './ErrorBoundary.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
      <Segment>
        <div id='app'>
          <h1>hi</h1>
        </div>
      </Segment>
      </ErrorBoundary>
    );
  }
}
