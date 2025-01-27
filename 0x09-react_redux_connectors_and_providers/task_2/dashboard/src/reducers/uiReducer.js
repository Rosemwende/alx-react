import { Map } from 'immutable';
import { LOGIN_REQUEST, LOGOUT } from '../actions/uiActionCreators';

const initialState = Map({
  isUserLoggedIn: false,
  user: null,
  isNotificationDrawerVisible: false,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('isUserLoggedIn', true).set('user', action.payload);
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    default:
      return state;
  }
};

export default uiReducer;
