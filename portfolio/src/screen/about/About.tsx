import React from "react";
import styles from "./About.module.css";
import Strings from "../../constants/strings";

function About(){
    return(
        <div className={styles.aboutmainContainner}>
            <h1 className={styles.h1heading}>About</h1>
            <hr className={styles.hrview}/>
            <h2 className={styles.h2subheading}>bit about my self</h2>
          
            <p className={styles.pstyling}>
                This is a portfolio website created using React and Tailwind CSS.
            </p>

            <h2 className={styles.h2subheading}> Work Timeline</h2>
            <p  className={styles.pstyling}>
                I have started my career as a software developer in 2019. I have worked on various technologies like React, Node, Angular, Java, Spring Boot, and many more.</p>
            <h2 className={styles.h2subheading}> Skills</h2>
            <p className={styles.pstyling}>
                I have worked on various technologies like React, Node, Angular, Java, Spring Boot, and many more.</p>

        </div>
    )
}
export default About;