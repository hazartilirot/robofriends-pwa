import React from 'react';

const SearchBox = ({ search }) => {

  return (
    <div className='pa2'>
      <input aria-label='Search a robot'
             className='pa3 ba b--green bg-lightest-blue' 
             type='search' 
             placeholder='Search a robot' 
             onChange={search}
      />
    </div>
  );
};
export default React.memo(SearchBox);
