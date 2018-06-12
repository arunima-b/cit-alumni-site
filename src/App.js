import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

import ErrorBoundary from './ErrorBoundary.jsx';
import Homepage from './Homepage.jsx';
import Newsfeed from './Newsfeed.jsx';
import People from './People.jsx';
import Profile from './Profile.jsx';

import './App.css';

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
    let content;
    switch(this.state.activeItem) {
      case 'home':
        content = <Homepage />;
        break;

      case 'news':
        content = <Newsfeed />;
        break;

      case 'people':
        content = <People />;
        break;

      case 'profile':
        content = <Profile />;
        break;

      default:
        content = <Homepage />;
        break;
    }

    return (
      <ErrorBoundary>
        <Segment>
          <Menu>
            <Menu.Item
              name="home"
              active={this.state.activeItem === 'home'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Home
            </Menu.Item>

            <Menu.Item
              name="news"
              active={this.state.activeItem === 'news'}
              onClick={this.handleMenuItemClick.bind(this)}
              >News
            </Menu.Item>

            <Menu.Item
              name="people"
              active={this.state.activeItem === 'people'}
              onClick={this.handleMenuItemClick.bind(this)}
              >People
            </Menu.Item>

            <Menu.Item
              name="profile"
              active={this.state.activeItem === 'profile'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Profile
            </Menu.Item>
          </Menu>
        </Segment>

        <Segment>
          {content}
        </Segment>
      </ErrorBoundary>
    );
  }
}
