import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

class Notifications extends Component {
  handleFilterChange = (filter) => {
    this.props.setNotificationFilter(filter);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div>
        <h2>Here is the list of notifications</h2>
        
        <button onClick={() => this.handleFilterChange('urgent')}>‼️</button>
        <button onClick={() => this.handleFilterChange('default')}>💠</button>
        
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
