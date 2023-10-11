import {useState} from 'react';

//Utility hook for bundling shared state across the two sign up components
export const useSignUpBundler = () => {
    
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [stateState, setState] = useState('')
  const [city, setCity] = useState('')
  
  const [successMsg, setSuccessMsg] = useState('')
  return ({
          getters: [password, confirm, email, stateState, city],
        setters: [setPassword, setConfirm, setEmail, setState, setCity],
        successState: [successMsg, setSuccessMsg]
      }

  ) 
  
  



}
