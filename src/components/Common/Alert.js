import React, { useState } from 'react';

//SweetAlert
import SweetAlert from 'react-bootstrap-sweetalert';

const UiSweetAlert = () => {
  const [alertState, setAlertState] = useState(true);
  return (
    <React.Fragment>
      {alertState ? (
        <SweetAlert
          title="Item added Successfully."
          timeout={2000}
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
          }}
          showCloseButton={false}
          showConfirm={false}
          success
          onConfirm={() => setAlertState(false)}
        ></SweetAlert>
      ) : null}
    </React.Fragment>
  );
};

export default UiSweetAlert;
