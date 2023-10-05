import { prisma } from '@/database/db';
import { findUserByEmail } from '@/database/users/findUser';
import NextAuth from 'next-auth/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { compare } from 'bcrypt';

export const authOptions = {
  secret : process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "lhovee@redmoon.com" },
        password: { label: "Password", type: "password" }
      },
      //Login returns null if theres a problem with login credentials, else returns a user
      async authorize(credentials) {
        //Guard clause for if credentials are missing
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await findUserByEmail(credentials.email)

        //Check if user doesn't exist
        if (!user) {
          return null
        }

        //Bcrypt method for handling if the passwords are the same or not,
        const isValidPassword = await compare(credentials.password, user.hashedPassword)
        if (!isValidPassword) {
          return null
        }

        //Valid login
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    }),

    //The Providers below functions correctly, but the feature doesn't work because of other non-null constraints on the User's table.
    // Logic needs to be provided in order to get this to work, or users can only be allowed to sign in with an account they signed up with.
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    //Retrieves the user's role from the user table, sticks it on token. The user argument is the same as the one returned in authentication.
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role
      }
      return token
    },
    //Retrieves the user.id from the db and sticks it on the session token, used to access user.id on frontend
    //Retrieves the role from the users token, sticks it on the user session
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.role = token.role
      }

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },

}

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }