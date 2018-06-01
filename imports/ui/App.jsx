import React, { Component } from 'react';
import { Image, Menu, Header, Segment } from 'semantic-ui-react';

import ErrorBoundary from './ErrorBoundary.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleMenuItemClick(e, {name}) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <ErrorBoundary>
          <Segment>
          <Menu>

            <Menu.Item
              name="home"
              active={true}
              active={this.state.activeItem === 'home'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Home
            </Menu.Item>

            <Menu.Item
              name="news"
              active={true}
              active={this.state.activeItem === 'news'}
              onClick={this.handleMenuItemClick.bind(this)}
              >News
            </Menu.Item>

            <Menu.Item
              name="people"
              active={true}
              active={this.state.activeItem === 'people'}
              onClick={this.handleMenuItemClick.bind(this)}
              >People
            </Menu.Item>

          </Menu>
          </Segment>
          </ErrorBoundary>
    );
  }
}
