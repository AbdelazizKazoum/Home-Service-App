import GithubProvider from "next-auth/providers/github";
import nextAuth, { Account, User as authUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import connect from "@/utils/db";

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account }: { user: authUser; account: Account }) {
      if (account?.provider === "credentials") {
        return true;
      }
      if (account?.provider == "github") {
        connect();
        try {
          const existing = await User.findOne({ email: user.email });
          if (!existing) {
            const newUser = new User({
              email: user.email,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (error) {
          console.log("error saving user : ", error);
          return false;
        }
      }
    },
  },
};

export const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
