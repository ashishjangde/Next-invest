import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import prisma from "./lib/dbConnect";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { email: credentials.email },
              ]
            }
          });

          if (!user) {
            return null;
          }

          const stringPassword = credentials.password.toString();
          const checkPassword = await bcryptjs.compare(stringPassword, user.password);
          if (!checkPassword) {
            return null;
          }

          return {
            ...user,
            id: user.id.toString(), 
          };

        } catch (err) {
          console.error(err);
          return null;
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
        token.email = user.email;
        token.roles = user.roles;
       
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.roles = token.roles;
      }
      return session;
    }
  },

  logger: {
    error: () => {
      // console.error(message);
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/login',
  },
});
