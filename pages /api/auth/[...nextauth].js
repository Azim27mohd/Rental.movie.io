import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

// Simulated API function that returns a promise representing an API request
const mockAPIRequest = async (credentials) => {
  const apiUrl = 'https://api.rental.movie.io.github.com/data'; // Replace with your actual API endpoint URL

  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // Example: Change the HTTP method as needed
      headers: {
        'Content-Type': 'application/json',
        // Include any authorization headers or tokens here if required
        'Authorization': `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` // Replace with your actual token
      },
      body: JSON.stringify(credentials) // Example: Sending credentials as JSON in the request body
      // Adjust the body as needed based on your API endpoint's requirements
    });

    if (response.ok) {
      // Return the response data if request is successful
      return Promise.resolve({ status: response.status, data: await response.json() });
    } else {
      // Return the error status and message
      return Promise.reject({ status: response.status, message: 'Failed to fetch data' });
    }
  } catch (error) {
    // Handle any fetch errors
    return Promise.reject(error);
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
            return Promise.resolve(response.data);
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
