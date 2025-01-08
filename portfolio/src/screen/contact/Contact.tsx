import React from "react";
import styles from "./Contact.module.css";
import Strings from "../../constants/strings";
import PersonalString from "../../constants/personal/personalString";

function Contact() {
    return (
        <div className={styles.topMainContainner}>
            <div className={styles.maincontainer}>
                <h1 className={styles.mainH2}>Contact Me</h1>
                <br />

                <form className={styles.formContainer}>
                    <h2 className={styles.secH2}>Get in touch</h2>
                    <hr className={styles.hrLine} />
                    <label className={styles.lableFiled} >{Strings.FORMDATA.EMAIL} {PersonalString.FROM.EMAIL}</label> <br />
                    <label className={styles.lableFiled}>{Strings.FORMDATA.PHONE} {PersonalString.FROM.PHONE}</label><br />
                    <label className={styles.lableFiled} >{Strings.FORMDATA.MESSAGE}</label><br />
                    <input type="text" placeholder={Strings.PLACEHOLDER.NAME} className={styles.inputFiled} /><br /><br />
                    <input type="text" placeholder={Strings.PLACEHOLDER.EMAIL} className={styles.inputFiled} /><br /><br />
                    <input type="text" placeholder={Strings.PLACEHOLDER.MESSAGE} className={styles.inputFiled} /><br /><br />
                    <button type="submit" className={styles.formButton}>{Strings.BUTTON.SEND}</button>



                </form>
              

            </div>
              <div className={styles.secondView}>
                    <h2></h2>
                </div>
        </div>
    );
}

export default Contact;