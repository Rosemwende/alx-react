import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
    logOut: () => {},
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    return (
      <div>
        <h1>Welcome to the App!</h1>
      </div>
    );
  }
}

export default App;
