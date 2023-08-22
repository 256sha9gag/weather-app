import React from 'react';
import useStoreContext from '../../../hook/useStoreContext';

const ErrorMessage = () => {
  const {state} = useStoreContext();

  return (
    <>
      {state.errorMessage ? (
        <div className='sidebar__error'>
          {state.errorMessage}
        </div>
      ) : null}
    </>
  );
};

export default ErrorMessage;