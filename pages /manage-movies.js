// pages/manage-movies.js

import { useSession, signOut } from 'next-auth/react';
import styles from '../styles/style.css'; // Import the styles

function ManageMoviesPage() {
  const { data: session } = useSession();

  return (
    <div className={styles.manageMoviesPageContainer}> {/* Apply class name from styles.css */}
      <h1>Manage Movies</h1>
      {session && session.user.role === 'admin' ? (
        <>
          <p>Welcome, {session.user.name} (Admin)!</p>
          <button onClick={() => signOut()}>Sign out</button>
          {/* Add functionality to add, edit, and delete movies here */}
        </>
      ) : (
        <p>You do not have permission to access this page.</p>
      )}
    </div>
  );
}

export default ManageMoviesPage;
