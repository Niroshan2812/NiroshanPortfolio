import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Contact.module.css";
import Strings from "../../constants/strings";
import PersonalString from "../../constants/personal/personalString";
import { Typewriter } from "react-simple-typewriter";

function Contact() {
    // Define types for form data and errors
    interface FormData {
        name: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [successMessage, setSuccessMessage] = useState("");
    const[isSubmitting, setIsSubmitting] = useState(false);

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


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }
        if (!formData.message) errors.message = "Message is required.";
        return errors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch("http://localhost:8080/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSuccessMessage("Message sent successfully!");
                    setTimeout(()=>{
                        setSuccessMessage("");

                    }, 4000);
                    setFormData({ name: "", email: "", message: "" });
                } else {
                    alert("Error sending message, please try again later.");
                }
            } catch (error) {
                alert("An error occurred: " + (error as Error).message);
            }
        }
    };

    return (
        <div className={styles.topMainContainner}>
            
            <div className={styles.maincontainer}>
            <h1 className={styles.mainH2}>Contact Me</h1>
               
               <br />
                
                <form className={styles.formContainer} onSubmit={handleSubmit}>
         
                    <hr className={styles.hrLine} />
                    <label className={styles.lableFiled}>
                        {Strings.FORMDATA.EMAIL} {PersonalString.FROM.EMAIL}
                    </label> <br />
                    <label className={styles.lableFiled}>
                        {Strings.FORMDATA.PHONE} {PersonalString.FROM.PHONE}
                    </label> <br />
                    <label className={styles.lableFiledMsg}>
                         {PersonalString.FROM.MESSAGE}
                    </label> <br />
                    <input
                        type="text"
                        name="name"
                        placeholder={Strings.PLACEHOLDER.NAME}
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.inputFiled}
                    /><br /><br />
                    <input
                        type="email"
                        name="email"
                        placeholder={Strings.PLACEHOLDER.EMAIL}
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.inputFiled}
                    /><br /><br />
                    <textarea
                        name="message"
                        placeholder={Strings.PLACEHOLDER.MESSAGE}
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.inputFiled}
                    /><br /><br />
                    <button type="submit" className={styles.formButton}>
                        {Strings.BUTTON.SEND}
                    </button>
                    {successMessage && <p className={styles.successIndicator}>{successMessage}</p>}
                    {Object.keys(errors).map((errorKey) => (
                        <p key={errorKey} className={styles.indicator}>{errors[errorKey]}</p>
                    ))}
                </form>
            </div>
            <div className={styles.secondView}>
                <div className={styles.codewriting}>
                    <pre className={styles.preEdit}>
                        <Typewriter words={[codeExample]} loop={1} cursor cursorStyle="|" typeSpeed={10} delaySpeed={0} />
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default Contact;
