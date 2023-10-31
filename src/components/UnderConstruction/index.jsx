"use client"
import React from 'react';

const UnderConstruction = ({link}) => { 
  //please replace this once we have a global style sheet
  const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'50px', margin: '2rem'}
  const REDMOON_LINK = `https://github.com/Red-Moon-Software-Apprenticeship/redmoon-console`
  
  return (
      
      <div style={style}>
        <div>
            <p>This page is under construction, but you can build the solution:</p>
            <a href={link || REDMOON_LINK}
              target='_blank'>
                {link || REDMOON_LINK}
            </a>
        </div>
      </div>
  
  );
};

export default UnderConstruction;