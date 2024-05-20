import NextAuth from 'next-auth';
import microsoftEntraId from 'next-auth/providers/microsoft-entra-id';
import prisma from '../../../../lib/prisma';
import { handlers } from "@/auth"

export default NextAuth({
  providers: [
    microsoftEntraId({
      clientId: process.env.MICROSOFT_ENTRA_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_ENTRA_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'login',
          tenant: process.env.MICROSOFT_ENTRA_TENANT_ID
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const email = user.email;

      if (typeof email === 'string') {
        const existingUser = await prisma.user.findUnique({
          where: { email: email }
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: email,
              name: user.name || '',
              image: 'default.png'
            }
          });
        }
      } else {
        console.error('Email is not valid:', email);
        return false;
      }

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
});

export const { GET, POST } = handlers