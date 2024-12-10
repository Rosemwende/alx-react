import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <div className="App">
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
      </div>
    );
  }
}

export default App;
