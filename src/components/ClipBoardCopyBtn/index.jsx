"use client"
import { useState } from 'react';
import React, { useEffect } from 'react';

const ClipBoardCopyBtn = ({value, copiedValue, hasTransition=false, transValue = '', otherSideEffects}) => {
  const [shownValue, setShownValue] = useState(value);

  useEffect(() => {
    if (hasTransition){
      setTimeout(()=> {
        
        setShownValue(value)
      })
    
    }
    }, [shownValue]
  )
  
  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      navigator.clipboard.writeText(copiedValue)
      alert(`${value} copied to clipboard: ${copiedValue}`)
      if (transValue) setShownValue(transValue)

      if (!!otherSideEffects){
        otherSideEffects()
      }
  }
 
  return (
    <button onClick={handleOnClick}>
      {shownValue}
    </button>
  );
};

export default ClipBoardCopyBtn;