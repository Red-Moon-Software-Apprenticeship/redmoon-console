import {useState, useEffect} from 'react';
import Errors from '@/components/Errors';


export const useErrors = () =>{
    const [errors, setErrors] = useState([])


    const useClearErrorsEffect = (...depedencies)=> (useEffect(()=> { 
        setErrors([])
    }, depedencies))

   return [errors, setErrors, useClearErrorsEffect, Errors]
}

