import { useState } from 'react';

const useInput = (type, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return { type, value, onChange };
};

export default useInput;
