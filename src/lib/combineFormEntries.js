export const combineFormEntries = (formData, ...arrObjs) => (

            { ...Object.fromEntries(formData), ...arrObjs} 
            
        )