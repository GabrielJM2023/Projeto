import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { supabase } from '../../../supabase';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials;
                const { user, error } = await supabase.auth.signIn({
                    email,
                    password,
                });
                if (error) {
                    throw new Error(error.message);
                }
                return user;
            },
        }),
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session(session, token) {
            session.user.id = token.id;
            session.user.email = token.email;
            return session;
        },
    },
});
