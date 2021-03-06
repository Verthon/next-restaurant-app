import NextAuth from "next-auth";
import Providers from "next-auth/providers";
const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = {
          id: 1,
          name: 'Admin',
          email: 'admin@example.com',
          groups: ['root_admin']
        }
        // Here you can fetch user form database or verify him in different way
        if (
          credentials.username === "admin" &&
          credentials.password === "asd"
        ) {
          // Any user object returned here will be saved in the JSON Web Token
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
};
export default (req, res) => NextAuth(req, res, options);
