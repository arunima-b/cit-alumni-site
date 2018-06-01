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
          <Menu>

            <Menu.Item
              name="menu1"
              active={true}
              active={this.state.avtiveItem === 'menu1'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Home
            </Menu.Item>

            <Menu.Item
              name="menu2"
              active={true}
              active={this.state.avtiveItem === 'menu2'}
              onClick={this.handleMenuItemClick.bind(this)}
              >News
            </Menu.Item>

            <Menu.Item
              name="menu3"
              active={true}
              active={this.state.avtiveItem === 'menu3'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Courses
            </Menu.Item>

            <Menu.Item
              name="menu3"
              active={true}
              active={this.state.avtiveItem === 'menu3'}
              onClick={this.handleMenuItemClick.bind(this)}
              >People
            </Menu.Item>

          </Menu>
          </Segment>
          </ErrorBoundary>
    );
  }
}
