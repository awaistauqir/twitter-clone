import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
interface Props {
  session: any;
  token: any;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async session({ session, token }: Props) {
      session.user.username = session.user.name
        .split(" ")
        .join("_")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
