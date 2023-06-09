import React from 'react';
import { Vortex } from 'react-loader-spinner'

const Loader = () => (
  <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
);

export default Loader;
