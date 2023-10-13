import React from 'react';

//A default hook for handling errors. Meant to abstract away the work of constantly rendering the same HTML/CSS on several components
//Exported for conveinience by the useErrors custom hook.

const Errors = ({errors}) => {
  return (
    <ul>
        {!!errors.length && 
          errors.map((error, idx) =>
        <li key={idx}>{error}</li>)}
    </ul>
    );
};

export default Errors;