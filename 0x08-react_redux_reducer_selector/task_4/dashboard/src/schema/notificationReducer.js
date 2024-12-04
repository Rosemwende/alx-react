import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const defaultState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
});

const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge({
        notifications: fromJS(notificationsNormalizer(action.data)),
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index.toString(), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
