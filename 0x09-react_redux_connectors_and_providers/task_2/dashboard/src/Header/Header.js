// Header/Header.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
  render() {
    const { user, logout } = this.props;

    return (
      <header>
        <h1>Dashboard</h1>
        {user ? (
          <div>
            <p>Welcome, {user.name}</p>
            <a href="#" onClick={logout}>Logout</a>
          </div>
        ) : (
          <p>Please log in</p>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
