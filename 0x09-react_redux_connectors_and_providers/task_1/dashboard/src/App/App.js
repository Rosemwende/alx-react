import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

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
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
