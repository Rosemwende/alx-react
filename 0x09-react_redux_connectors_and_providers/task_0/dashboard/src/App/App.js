import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        {isLoggedIn ? (
          <p>Welcome! You are logged in.</p>
        ) : (
          <p>Please log in to access your dashboard.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.isLoggedIn,
});

export default connect(mapStateToProps)(App);
