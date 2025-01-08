import React, { useEffect } from "react";
import styles from "./Portfolio.module.css";
import imgss from "../../assets/bg_img.png";

type project = {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    githubLink: string;
    imageUrls: string[];
    url: string;
    images: string[];
}


function Portfolio() {
    const [projects, setProjects] = React.useState<project[]>([]);
    const [selectedProject, setSelectedProject] = React.useState<project | null>(null);


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const responce = await fetch("http://localhost:8080/api/portfolio");
                if (!responce.ok) {
                    throw new Error("failed to fetch data");

                }
                const data = await responce.json();
                const formmattedProjects = data.map((item: any) => ({
                    id: item.id || Math.random(),
                    name: item.name || "Unknown Project",
                    shortDescription: item.shortDescription,
                    description: item.description,
                    url: item.githubLink || "https://github.com",
                    images: item.imageUrls.map((url: string) =>
                        url.replace("view?usp=sharing", "uc?export=view")),

                }));

                setProjects(formmattedProjects)

            } catch (error) {
                console.log("Error fetching projects", error)
            }

        };
        fetchProjects();
    }, []);

    const handleCardClick = (project: project) => {
        setSelectedProject(project);
    }
    const handleClosePopup = () => {
        setSelectedProject(null);
    }
    const detailshow = () => {
        const data2 = selectedProject;
        console.log(JSON.stringify(data2, null, 2));
   
        

    }

    return (
        <div className={styles.maincontainer}>
            <h1 className={styles.headingH1}>Portfolio</h1>
            <hr />
            <div className={styles.portfolioContainer}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card} >
                        <h2 className={styles.cardTitle}>{project.name}</h2>
                        <p className={styles.cardDescription}>{project.shortDescription}</p>
                        <button className={styles.cardButton} onClick={() => handleCardClick(project)}>View Details</button>
                    </div>
                ))}

            </div>
            {/**Popup */}
            {selectedProject && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <button className={styles.closeButton} onClick={handleClosePopup}>X</button>
                        <h2 className={styles.popupTitle}>{selectedProject.name}</h2>
                        <p className={styles.popupDescription}>{selectedProject.description}</p>
                        <div className={styles.imageContainner}>
                            {selectedProject.images.map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Project ${selectedProject.name} Image ${index + 1}`}
                                    className={styles.popupImages}
                                />
                            ))}
                        </div>
                        <button onClick={detailshow}>ClickMe</button>
                        <a href="https://github.com/Niroshan2812" target="_blank" rel=" noopener noreferrer" className={styles.popupButton}>View on Github</a>
                    </div>

                </div>
            )}
        </div>
    );
}
export default Portfolio;