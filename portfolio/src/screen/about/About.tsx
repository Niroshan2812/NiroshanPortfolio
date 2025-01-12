import React from "react";
import styles from "./About.module.css";
import PersonalString from "../../constants/personal/personalString";
import imagesd from "../../assets/personalImg/about4.jpg"
import Strings from "../../constants/strings";

function About() {
    return (
        <div className={styles.aboutmainContainner}>
            <h1 className={styles.h1heading}>About Me</h1>
            <hr/>
            <div className={styles.bottomcontainner}>
                <div className={styles.aboutPictureContainner}>
                    <img className={styles.aboutPicture} src={imagesd} alt="about" />
                  
                </div>
                <div className={`${styles.aboutDetailsContainner} animate-fade-slide-up`}>
                    <p className={styles.aboutmeText}><span>{PersonalString.ABOUTME.BACE1}</span>{PersonalString.ABOUTME.DESCRIPTION2}<br/><br/>{PersonalString.ABOUTME.Skill3}{PersonalString.ABOUTME.CONCLUTIOIN4}</p>

                </div>
            </div>
        </div>
    )
}
export default About;