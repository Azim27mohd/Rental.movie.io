// pages/login.js

import { signIn } from 'next-auth/react';
import styles from '../styles/style.css'; // Import the styles

function LoginPage() {
  return (
    <div className={styles.loginPageContainer}> {/* Apply class name from styles.css */}
      <h1>Login</h1>
      <button onClick={() => signIn('credentials', { redirect: false })}>
        Sign in as Admin
      </button>
    </div>
  );
}

export default LoginPage;
