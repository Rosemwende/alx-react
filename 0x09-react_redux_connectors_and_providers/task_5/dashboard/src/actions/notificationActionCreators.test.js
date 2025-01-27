import {
  setLoadingState,
  setNotifications,
  fetchNotifications,
} from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

describe('notificationActionCreators tests', () => {
  it('should create a SET_LOADING_STATE action', () => {
    const action = setLoadingState(true);
    expect(action).toEqual({
      type: SET_LOADING_STATE,
      loading: true,
    });
  });

  it('should create a FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [{ id: 1, value: 'Test notification' }];
    const action = setNotifications(data);
    expect(action).toEqual({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    });
  });

  it('should dispatch actions in fetchNotifications', async () => {
    const dispatch = jest.fn();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, value: 'Test notification' }]),
      })
    );
    await fetchNotifications()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setLoadingState(true));
    expect(dispatch).toHaveBeenCalledWith(
      setNotifications([{ id: 1, value: 'Test notification' }])
    );
    expect(dispatch).toHaveBeenCalledWith(setLoadingState(false));
  });
});
