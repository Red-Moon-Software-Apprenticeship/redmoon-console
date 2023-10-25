//Lazy utility method for clearing all of the setters
//ONLY takes arguments of type React.Dispatch<SetStateAction<String>>
export const clearForm = (...setters) =>{
    for(const setter of setters) setter('')
    return
  }

