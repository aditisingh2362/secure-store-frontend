import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../Components/Form/Form.module.css'

function ResultsPage(props) {
    return (
        <div>
        <NavBar/>
        <div className={styles.loginDiv}>
            <div className={styles.logo}></div>
            <div className={styles.title}>Results</div>
            <div className={styles.fields}>
            <div className={styles.input}><input type="text" placeholder="Enter Roll Number" /></div>
            <div className={styles.input}><input type="text" placeholder="Enter Semester Number" /></div>
            <div className={styles.input}><input type="file" placeholder="Upload Private key" /></div>
        </div>
            <button className={styles.signin}>Submit</button>
            <div className={styles.link}>
            </div>
      </div>
      </div>
    );
}

export default ResultsPage;