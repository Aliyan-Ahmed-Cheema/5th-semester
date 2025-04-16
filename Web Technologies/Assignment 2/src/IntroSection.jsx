//Note that the original website with the same link has changed between Assignment 1 and Assignment 2
//This code follows the pattern of the page made in assignment 1
import React from 'react';

function IntroSection() {
  return (
    <div className="row text-light" style={{ backgroundColor: 'lightgray' }}>
      <div
        className="col-11"
        style={{ marginLeft: '50px', marginTop: '70px', fontSize: '75px' }}
      >
        Discover 2030
      </div>
      <div className="col-11" style={{ fontSize: '30px', marginLeft: '50px' }}>
        A time of unprecedented change and opportunity
      </div>
    </div>
  );
}

export default IntroSection;
