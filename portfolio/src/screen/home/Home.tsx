import React from "react";
import styles from "./Home.module.css"
import Strings from "../../constants/strings";

function Home(){
    return(
        <>
          <p className={styles.title}>This is an opening </p>
          <input type="text" placeholder={Strings.PLACEHOLDER.NAME} className={styles.input}/>
        </>
      
    )
}

export default Home;