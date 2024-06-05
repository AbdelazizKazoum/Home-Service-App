import GithubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";
import NextAuth, {
  Account,
  NextAuthOptions,
  Profile,
  User as authUser,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import connect from "@/utils/db";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
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
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID || "",
      clientSecret: process.env.KEYCLOAK_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER || "",
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: authUser | AdapterUser;
      account: Account | null;
      profile?: Profile;
      email?: { verificationRequest?: boolean };
      credentials?: Record<string, unknown>;
    }) {
      if (account?.provider === "credentials") {
        return true;
      }

      if (account?.provider === "github") {
        try {
          if (!user.email) {
            console.error("User email is missing");
            return false;
          }

          await connect();

          const existing = await User.findOne({ email: user.email });
          if (!existing) {
            const newUser = new User({
              email: user.email,
            });
            await newUser.save();
          }
          return true;
        } catch (error) {
          console.error("Error saving user:", error);
          return false;
        }
      }

      // Default to false for unsupported providers
      return false;
    },
  },
};
