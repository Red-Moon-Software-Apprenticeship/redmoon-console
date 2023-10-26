import {useState} from 'react'
import OnSuccess from "@/components/OnSuccess"

export const useSuccess = () => {
    const [successMsg, setSuccessMsg] = useState('')

    return [successMsg, setSuccessMsg, OnSuccess]

}