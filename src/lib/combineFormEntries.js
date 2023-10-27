//Used specifically for adding array objects to formData 
//Second argument accpets numerous arguments of type []<T>


export const combineFormEntries = (formData, arrsObj) => (
 
    Object.assign({...Object.fromEntries(formData)}, arrsObj ) 
)
    
