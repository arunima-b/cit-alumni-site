import React, { Component } from "react";
import { Image, Menu, Header, Segment } from "semantic-ui-react";

import ErrorBoundary from "./ErrorBoundary.jsx";
import Homepage from "./Homepage.jsx";
import Newsfeed from "./Newsfeed.jsx";
import People from "./People.jsx";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleMenuItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    let content;
    switch (this.state.activeItem) {
      case "home":
        content = <Homepage />;
        break;

      case "news":
        content = <Newsfeed />;
        break;

      case "people":
        content = <People />;
        break;

      default:
        content = <Homepage />;
        break;
    }

    return (
      <ErrorBoundary>
        <Segment className="header">
          <div>
            <Image src="/images/logo/logofinal.jpg" size="small" />
            <Header as="h1">
              Computer Information Technology Minor Alumni
            </Header>
            <Menu>
              <Menu.Item
                name="home"
                active={true}
                active={this.state.activeItem === "home"}
                onClick={this.handleMenuItemClick.bind(this)}
              >
                Home
              </Menu.Item>

              <Menu.Item
                name="news"
                active={true}
                active={this.state.activeItem === "news"}
                onClick={this.handleMenuItemClick.bind(this)}
              >
                News
              </Menu.Item>

              <Menu.Item
                name="people"
                active={true}
                active={this.state.activeItem === "people"}
                onClick={this.handleMenuItemClick.bind(this)}
              >
                People
              </Menu.Item>
            </Menu>
          </div>
        </Segment>

        <Segment className="content">{content}</Segment>
      </ErrorBoundary>
    );
  }
}
