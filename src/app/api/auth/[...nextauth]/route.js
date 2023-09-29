import {prisma } from '@/database/db';
import NextAuth from 'next-auth/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt';

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials:{
          email: {label: "Email", type: "text", placeholder: "lhovee@redmoon.com"},
          password: {label: "Password", type: "password"}
        },
        async authorize(credentials){
          if (!credentials?.email || !credentials?.password){
            return null
          }
                    
          const user = await prisma.user.findUnique({ 
            where:{
              email: credentials.email
            }
          })
      
          if(!user){
            return null
          }
      
          const isValidPassword = await compare(credentials.password, user.hashedPassword)
          if (!isValidPassword){
            return null
          }
      
          return {
            id: user.id,
            email: user.email,
            name: user.name
          }
        }
        
      })
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