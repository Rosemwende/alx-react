import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

export class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  markNotificationAsRead = (id) => {
    this.props.markAsRead(id);
  };

  render() {
    const { listNotifications } = this.props;

    return (
      <div className="Notifications">
        <h2>Your Notifications</h2>
        <ul>
          {listNotifications.map((notification) => (
            <li
              key={notification.id}
              onClick={() => this.markNotificationAsRead(notification.id)}
            >
              {notification.value}
            </li>
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
  ),
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
