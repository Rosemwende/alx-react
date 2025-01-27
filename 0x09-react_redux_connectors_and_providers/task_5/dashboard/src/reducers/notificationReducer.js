import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';

const initialState = Map({
  loading: false,
  notifications: Map(),
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: action.data.reduce((acc, notification) => {
          acc[notification.id] = notification;
          return acc;
        }, {}),
      });

    default:
      return state;
  }
};

export default notificationReducer;
