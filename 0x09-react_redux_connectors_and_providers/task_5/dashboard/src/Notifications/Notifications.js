import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications:</p>
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id}>{notification.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listNotifications: Object.values(state.notifications.get('notifications').toJS()),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
