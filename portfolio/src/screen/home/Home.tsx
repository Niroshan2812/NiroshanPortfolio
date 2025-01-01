import React from "react";
import styles from "./Home.module.css"
import Strings from "../../constants/strings";
import PersonalString from "../../constants/personal/personalString";

function Home() {
  return (
    <>

      <div className={styles.maincontainer}>

        <div className={styles.leftcontainer}>

          <h1 className={styles.nameContainner}>
            {Strings.GREETINGS.INTRO}
            <span className={styles.nameContainnerSpan}>
              {PersonalString.FROM.NAME}</span></h1>
          <h3 className={styles.detailContainner}> {Strings.EXPREANCE.TITLE}
          </h3>
          
        </div>
        <div className={styles.rightcontainer}>
          <p>This is right</p>
        </div>

      </div>
    </>

  )
}

export default Home;