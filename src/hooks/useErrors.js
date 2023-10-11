import {useState, useEffect} from 'react';



export const useErrors = () =>{
    const [errors, setErrors] = useState([])


    const clearErrorsEffect = (...depedencies)=> (useEffect(()=> { 
        setErrors([])
    }, depedencies))

   return [errors, setErrors, clearErrorsEffect]
}

