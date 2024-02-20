import styles from "./register.module.css";
import  RegisterForm  from '@/components/registerFrom/RegisterFrom';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
