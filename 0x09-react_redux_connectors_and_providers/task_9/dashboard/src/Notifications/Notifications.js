import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div>
      <h2>Here is the list of notifications:</h2>
      {notifications.size === 0 ? (
        <p>No new notifications!</p>
      ) : (
        notifications.map((notification) => (
          <div key={notification.get('id')}>
            <p>{notification.get('message')}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;
