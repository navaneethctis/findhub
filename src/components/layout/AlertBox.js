import React, {useContext} from 'react';

import AlertContext from '../../contexts/alert/AlertContext';

const AlertBox = () => {
  const {
    state: {message, type},
    removeAlertBox
  } = useContext(AlertContext);

  return (
    <div className={`notification is-${type}`}>
      <button onClick={removeAlertBox} className='delete'></button>
      {message}
    </div>
  );
};

export default AlertBox;
