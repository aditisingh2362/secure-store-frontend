import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../Components/Form/Form.module.css'

function ViewPage(props) {
    return (
        <div>
        <NavBar/>
        <div className={styles.loginDiv}>
            <div className={styles.logo}></div>
            <div className={styles.title}>View</div>
            <div className={styles.fields}>
            <div className={styles.input}><input type="file" placeholder="Upload file" /></div>
        </div>
            <button className={styles.signin}>View</button>
            <div className={styles.link}>
            </div>
      </div>
      </div>
    );
}

export default ViewPage;