import type { JWT } from "next-auth/jwt";
import NextAuth, { AuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma"; 

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = await prisma.users.findUnique({
                    where: { email: credentials?.email },
                });

                if (!user) return null;

                const isValid = await bcrypt.compare(
                    credentials!.password,
                    user.password_hash
                );

                if (!isValid) return null;

                return {
                    id: user.user_id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24, 
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT, user?: User }) {
            if (user) {
                token.id = (user as any).id;
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }: { session: Session, token: JWT }): Promise<Session> {
            if (token) {
                (session.user as any).id = token.id;
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
