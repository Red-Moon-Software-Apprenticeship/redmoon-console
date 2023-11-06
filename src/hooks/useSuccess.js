import {useState} from 'react'
import OnSuccess from "@/components/OnSuccess"

export const useSuccess = () => {
    const [successMsg, setSuccessMsg] = useState('')
    const useClearSuccess = (dependencies = [], time = 2000) => ( useEffect(()=>{
        const timeout = setTimeout(()=> { 
            successMsg('')
        }, time)

        return ()=> {
            clearTimeout(timeout)
        }
    }, dependencies))
    
    return [successMsg, setSuccessMsg, OnSuccess, useClearSuccess]

}