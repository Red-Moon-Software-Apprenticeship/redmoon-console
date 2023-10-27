//Used specifically for adding array objects to formData 
//Second argument accpets numerous arguments of type []<T>


export const combineFormEntries = (formData, ...arrObjs) => (

    { ...Object.fromEntries(formData), ...arrObjs }

)