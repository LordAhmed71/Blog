import { handleGithubLogin } from "@/lib/actions";
import LoginForm from "@/components/loginForm/LoginForm";

import styles from "./login.module.css";

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button type="submit" className={styles.github}>
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
