import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.props.logOut || (() => {});
  }
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <h1>Welcome to the App!</h1>
        {/* Other content of the App */}
      </div>
    );
  }
}

export default App;
