import { prisma } from '@/database/db';

export const findUserByEmail = (email) => (
    prisma.user.findUnique({ 
        where:{
          email: email
        }
      })
) 