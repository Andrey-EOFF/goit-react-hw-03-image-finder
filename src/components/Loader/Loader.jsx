import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="TailSpin"
    color="#00BFFF"
    height={80}
    width={80}
    timeout={3000} // 3 secs
  />
);

export default Spinner;