import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        {isLoggedIn ? (
          <p>Welcome! You are logged in.</p>
        ) : (
          <p>Please log in to access your dashboard.</p>
        )}
        {displayDrawer && <div className="notification-drawer">Notifications</div>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

export default connect(mapStateToProps)(App);
