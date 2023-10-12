import {randomUUID} from 'crypto';

export const createVerifToken = () => ({
    token: randomUUID(),
    expires: new Date(Date.now() + 3600000 * 24) //"Expires in 24 hours
  
})