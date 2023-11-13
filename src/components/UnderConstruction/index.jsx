"use client"
import React from 'react';
import './underconstruction.css'

const UnderConstruction = ({ link }) => {
  //please replace this once we have a global style sheet
  const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', margin: '2rem' }
  const REDMOON_LINK = `https://github.com/Red-Moon-Software-Apprenticeship/redmoon-console`

  return (

    <div style={style}>

      <button class="cta">
        <span class="hover-underline-animation">
          <a href={link || REDMOON_LINK}
            target='_blank'>
            Contribute Today
          </a>
        </span>
        <svg viewBox="0 0 46 16" fill='white' height="15" width="40" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        </svg>
      </button>


    </div>

  );
};

export default UnderConstruction;