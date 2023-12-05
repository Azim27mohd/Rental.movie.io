// pages/movies.js

import { useSession, signOut } from 'next-auth/react';
import styles from '../styles/style.css'; // Import the styles

function MoviesPage() {
  const { data: session } = useSession();

  return (
    <div className={styles.moviesPageContainer}> {/* Apply class name from styles.css */}
      <h1>Movies List</h1>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
          {/* Add movies list here */}
        </>
      ) : (
        <p>Please sign in to view the movies list.</p>
      )}
    </div>
  );
}
export default MoviesPage;
