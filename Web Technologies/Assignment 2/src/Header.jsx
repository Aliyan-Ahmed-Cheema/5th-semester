//Note that the original website with the same link has changed between Assignment 1 and Assignment 2
//This code follows the pattern of the page made in assignment 1
import React from 'react';

function Header() {
  return (
    <div className="row header justify-content-center text-center">
      <div className="col-1 Nokiaheader">
        <h1>Nokia</h1>
      </div>
      <div className="col-1" style={{ marginTop: '10px' }}>
        Industries
      </div>
      <div className="col-2" style={{ marginTop: '10px' }}>
        Network Solutions
      </div>
      <div className="col-2" style={{ marginTop: '10px' }}>
        Insights and Innovation
      </div>
      <div className="col-2" style={{ marginTop: '10px' }}>
        Collaborate with us
      </div>
      <div className="col-2" style={{ marginTop: '10px' }}>
        We are Nokia
      </div>
      <div className="col-2" style={{ marginTop: '10px' }}>
        two pics
      </div>
    </div>
  );
}

export default Header;
