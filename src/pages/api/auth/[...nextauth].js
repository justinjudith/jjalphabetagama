import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../database/Modals/Users';
import connectToMongo from '../../../database/conn';

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req) {
        connectToMongo().catch((error) =>
          res.status(500).json({ message: 'Connection Failed...!' })
        );
        const result = await User.findOne({ email: credentials.email });
        if (!result) throw new Error('Email not found');
        const checkPassword = await User.findOne({
          email: result.email,
          password: credentials.password,
        });
        if (!checkPassword) throw new Error('Incorrect password');
        return result;
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log({ user, account, profile, email, credentials });
    //   return true;
    // },
    async jwt({ token, user }) {
      const userData = user?._doc;
      delete userData?.password;
      return { ...token, ...userData };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
