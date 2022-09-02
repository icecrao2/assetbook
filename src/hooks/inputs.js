import { useState } from 'react';
import PropTypes from 'prop-types';

const inputs = ( init='' ) => {

  const [value, setValue] = useState(init);

  return [
    value, setValue
  ];
}

inputs.propTypes = {
  init: PropTypes.isRequired
}

export { inputs };