import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../Components/Form/Form.module.css'

function UploadPage(props) {
    return (
        <div>
        <NavBar/>
        <div className={styles.loginDiv}>
            <div className={styles.logo}></div>
            <div className={styles.title}>Upload Results</div>
            <div className={styles.fields}>
            <div className={styles.input}><input type="text" placeholder="Enter Semester Number" /></div>
            <div className={styles.input}><input type="text" placeholder="Batch number" /></div>
            <div className={styles.input}><input type="file" placeholder="Upload Grades" /></div>
        </div>
            <button className={styles.signin}>Upload Results</button>
            <div className={styles.link}>
            </div>
      </div>
      </div>
    );
}

export default UploadPage;