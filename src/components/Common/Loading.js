import React from 'react';

import { Spinner } from 'reactstrap';


const LoadindCard = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <Spinner type="grow" color="warning" />
      </div>
    </React.Fragment>
  );
};

export default LoadindCard;
