import {randomUUID} from crypto;

export const createVerifToken = () => ({
    token: randomUUID(),
    expires: Date.now() + 3600000,
    

    
})