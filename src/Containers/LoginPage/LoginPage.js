import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../Components/Form/Form.module.css'

function LoginPage(props) {
    return (
        <div>
        <NavBar/>
        <div className={styles.loginDiv}>
            <div className={styles.logo}></div>
            <div className={styles.title}>Login</div>
            <div className={styles.fields}>
            <div className={styles.input}><input type="text" placeholder="Enter Email" /></div>
            <div className={styles.input}><input type="password" placeholder="Enter Password" /></div>
        </div>
            <button className={styles.signin}>Login</button>
            <div className={styles.link}>
            </div>
      </div>
      </div>
    );
}

export default LoginPage;