import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../Components/Form/Form.module.css'

function DisplayPage(props) {
    return (
        <div>
        <NavBar/>
        <div className={styles.loginDiv}>
            {/* <div className={styles.logo}></div> */}
            <div className={styles.title}>Results</div>
            <div className={styles.fields}>
            <div className={styles.text}>Subject 1</div>
            <div className={styles.text}>Subject 2</div>
            {/* <div className={styles.input}><input type="text" placeholder="Enter Semester Number" /></div>
            <div className={styles.input}><input type="file" placeholder="Upload Private key" /></div> */}
        </div>
            <div className={styles.link}>
            </div>
      </div>
      </div>
    );
}

export default DisplayPage;