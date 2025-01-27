import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/uiActionCreators';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        {isLoggedIn ? (
          <p>Welcome! You are logged in.</p>
        ) : (
          <p>Please log in to access your dashboard.</p>
        )}
        {displayDrawer ? (
          <div className="notification-drawer">
            <p>Notifications</p>
            <button onClick={hideNotificationDrawer}>Hide Drawer</button>
          </div>
        ) : (
          <button onClick={displayNotificationDrawer}>Show Notifications</button>
        )}
        <button onClick={() => loginRequest({ username: 'user', password: 'password' })}>Login</button>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
