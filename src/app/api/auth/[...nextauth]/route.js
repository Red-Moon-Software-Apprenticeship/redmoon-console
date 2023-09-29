import {prisma } from '@/db'
import NextAuth from 'next-auth/next'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      
    ],
    callbacks: {
      session: async ({ session, token }) => {
        if (session?.user) {
          session.user.id = token.sub;
        }
        return session;
      },
    },
    session: {
      strategy: 'jwt',
    },
    
  });
  
  
export {handler as GET, handler as POST}