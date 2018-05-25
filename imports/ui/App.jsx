import React from 'react';

import ErrorBoundary from './ErrorBoundary.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
        <div id='app'>
        </div>
      </ErrorBoundary>
    );
  }
}
