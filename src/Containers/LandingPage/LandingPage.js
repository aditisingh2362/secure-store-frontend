import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import styles from './LandingPage.module.css'
import Image from '../../Images/security.svg'

function LandingPage(props) {
    return (
        <div>
           <NavBar/>
           <div className={styles.content}>
               <div className={styles.left}>
                    <h1>
                        Title
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the<br/> printing and
                        typesetting industry. Lorem Ipsum<br/> has been the industry's
                        standard dummy text ever<br/> since the 1500s, when an unknown
                        printer took a<br/> galley of type and scrambled it to make a type
                        specimen<br/> book. It has survived not only five centuries, but also <br/>
                        the leap into electronic typesetting, remaining essentially<br/> unchanged.
                        It was popularised in the 1960s with the release<br/> of Letraset sheets containing
                        Lorem Ipsum passages,<br/> and more recently with desktop publishing
                        software <br/>like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
               </div>
               <img src={Image} alt="React Logo"/>
           </div>
        </div>
    );
}

export default LandingPage;