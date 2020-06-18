import React, {useReducer} from 'react';

import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {SET_ALERT, REMOVE_ALERT} from '../types';

const AlertProvider = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  const renderAlertBox = (message, type) => {
    dispatch({type: SET_ALERT, payload: {message, type}});
  };

  const removeAlertBox = () => {
    dispatch({type: REMOVE_ALERT});
  };

  return (
    <AlertContext.Provider value={{state, renderAlertBox, removeAlertBox}}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
