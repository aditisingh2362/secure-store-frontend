import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import styles from "./LandingPage.module.css";
import Image from "../../Images/security.svg";

function LandingPage(props) {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Secure Store</h1>
          <p>
            Secure Store is your one stop destination for
            <br /> ensuring confidentiality and authenticity in
            <br /> students' grades.
            <br />
            <br /> We use Asymmetric Key Encryption to maintain
            <br /> confidentiality and ensure that only students and
            <br />
            trusted authorities can get access to the students'
            <br />
            results.
            <br />
            <br /> To ensure that students do not mis-use this
            <br /> and tamper their grades, we use Blockchain <br />
            to provide a high level of authenticity.{" "}
          </p>
        </div>
        <img src={Image} alt="React Logo" />
      </div>
    </div>
  );
}

export default LandingPage;
