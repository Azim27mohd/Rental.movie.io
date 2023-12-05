// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Add authentication logic here
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password",  type: "password" }
      },
      authorize: async (credentials) => {
        // Add your authentication logic here
        const user = { id: 1, name: 'admin', email: 'admin@example.com' };
        return Promise.resolve(user);
      }
    })
  ],
  session: {
    // Add session configuration here
  }
});
