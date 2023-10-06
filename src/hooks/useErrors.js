import {useState, useEffect} from 'react';



export const useErrors = (...depedencies) =>{
    const [errors, setErrors] = useState([])


    const clearErrorsEffect = useEffect(()=> { 
        setErrors([])
    }, depedencies)

   return [errors, setErrors, clearErrorsEffect]
}

