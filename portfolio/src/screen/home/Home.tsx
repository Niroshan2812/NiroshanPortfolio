import React from "react";
import styles from "./Home.module.css"
import Strings from "../../constants/strings";
import PersonalString from "../../constants/personal/personalString";
import image from "../../assets/bg_img.png"
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

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
          <div className={styles.buttoncontainnner}>
            <a href="/about" className={`${styles.hrfcontainner} group`}>
              <span className={`${styles.spancontainner} group-hover:h-full`}></span>
              <span className={`${styles.secondspancontainner} group-hover:translate-x-12`}>
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                About Me
              </span>
            </a>
          </div>
        </div>
        <div className={styles.rightcontainer}>
          <img className={styles.imgStyling} src={image} alt="backgroundImage" />
        </div>

        <div className={styles.thirdDiv}>
          <div className={styles.thirdDivContainer}>
            <a href={PersonalString.SOCIALlINKS.LINKDIN} target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
              <FaLinkedin className={styles.icon} />
            </a>
            <a href={PersonalString.SOCIALlINKS.GITHUB} target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
              <FaGithub className={styles.icon} />
            </a>
            <a href={PersonalString.SOCIALlINKS.FACEBOOK} target="_blank" rel="noopener noreferrer"className={styles.iconContainer}>
              <FaFacebook className={styles.icon} />
            </a>
            <a href={PersonalString.SOCIALlINKS.INSTERGRAM} target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
              <FaInstagram className={styles.icon} />
            </a>
           

          </div>
        </div>


      </div>
    </>

  )
}

export default Home;