"use client"
import React from 'react';

const UnderConstruction = () => { 
  //please replace this once we have a global style sheet
  const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'50px', margin: '2rem'}
  return (
      
      <div style={style}>
        <div>
            <p>This page is under construction, but you can build the solution:</p>
            <a href='https://github.com/Red-Moon-Software-Apprenticeship/redmoon-console' 
              target='_blank'>
                https://github.com/Red-Moon-Software-Apprenticeship/redmoon-console
            </a>
        </div>
      </div>
  
  );
};

export default UnderConstruction;