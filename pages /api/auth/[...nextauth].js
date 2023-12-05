import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

// Simulated API function that returns a promise representing an API request
const mockAPIRequest = async (credentials) => {
  // Simulating an API request with credentials
  // Replace this with your actual API request logic
  // For the sake of example, let's pretend this API expects a username and password
  if (credentials.username === 'admin' && credentials.password === 'password') {
    // Return a successful response
    return Promise.resolve({ status: 200, user: { id: 1, name: 'admin', email: 'admin@example.com' } });
  } else {
    // Return an unauthorized error (simulated 401 error)
    return Promise.reject({ status: 401, message: 'Unauthorized' });
  }
};

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          // Simulate an API request using mockAPIRequest
          const response = await mockAPIRequest(credentials);

          // Check the response status
          if (response.status === 200) {
            // Return user details if authorized
            return Promise.resolve(response.user);
          } else {
            // Handle other error statuses here if needed
            return Promise.reject(new Error('Failed to authenticate'));
          }
        } catch (error) {
          // Handle error responses, including 401 unauthorized error
          return Promise.reject(error);
        }
      }
    })
  ],
  session: {}
});
