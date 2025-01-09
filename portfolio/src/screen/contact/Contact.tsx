import React from "react";
import styles from "./Contact.module.css";
import Strings from "../../constants/strings";
import PersonalString from "../../constants/personal/personalString";
import { Typewriter } from "react-simple-typewriter";
function Contact() {
    const codeExample = `class DeveloperMatch {
    static class Candidate {
        String name;
        Set<String> skills;
        double availability, rating;
        Candidate(String name, Set<String> skills, double availability, double rating) {...}
    }
    static class Developer {...}
    public static Candidate findBestMatch(Developer developer, List<Candidate> candidates) {
        Candidate best = null;
        double maxScore = 0;
        for (Candidate c : candidates) {
            if (c.availability > 0.5) {
                double score = calculateScore(developer.skills, c);
                if (score > maxScore) {
                    maxScore = score;
                    best = c;
                }
            }
        }
        return best;
    }
    private static double calculateScore(Set<String> devSkills, Candidate candidate) {
        long matchingSkills = devSkills.stream().filter(candidate.skills::contains).count();
        return matchingSkills * candidate.rating * candidate.availability;
    }
    public static void main(String[] args) {
        Developer developer = new Developer(Set.of("Java", "Spring", "SQL"));
        List<Candidate> candidates = List.of(...);
        Candidate best = findBestMatch(developer, candidates);
        System.out.println(best != null ? "Best candidate: " + best.name : "No suitable candidate found.");
    }
}`;
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
               <div className={styles.codewriting}>
                    <pre className={styles.preEdit}>
                        <Typewriter words={[codeExample]} loop={1} 
                            cursor cursorStyle="|" typeSpeed={10} delaySpeed={0}
                        />
                    </pre>
               </div>
                </div>
        </div>
    );
}

export default Contact;