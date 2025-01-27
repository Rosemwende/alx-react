import React from 'react';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('App Component', () => {
  describe('mapStateToProps', () => {
    it('should return the correct props from state', () => {
      const state = fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      });

      const expectedProps = {
        isLoggedIn: true,
        displayDrawer: false,
      };

      expect(mapStateToProps(state)).toEqual(expectedProps);
    });
  });
});
