import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <footer>
        <p>Logged in as: {user ? user.name : 'Guest'}</p>
      </footer>
    );
  }
}

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export default connect(mapStateToProps)(Footer);
