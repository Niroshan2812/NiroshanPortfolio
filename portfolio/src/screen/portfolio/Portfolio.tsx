import React, { useEffect } from "react";
import styles from "./Portfolio.module.css";

type project = {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    images: string[];
    url: string;
}


function Portfolio() {
    const [projects, setProjects] = React.useState<project[]>([]);
    const [selectedProject, setSelectedProject] = React.useState<project | null>(null);

    useEffect(()=>{
        const fetchProjects = async () => {
        const responce = await fetch("projects.json");
        const data = await responce.json();
        setProjects(data);
        };
        fetchProjects();
    },[]);

    const handleCardClick= (project: project)=>{
        setSelectedProject(project);
    }
    const handleClosePopup =()=>{
        setSelectedProject(null);
    }


  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.headingH1}>Portfolio</h1>
      <hr/>
      <div className={styles.portfolioContainer}>
            {projects.map((project)=>(
                <div key={project.id} className={styles.card} >
                    <h2 className={styles.cardTitle}>{project.name}</h2> 
                    <p className={styles.cardDescription}>{project.shortDescription}</p>
                    <button className={styles.cardButton} onClick={()=>handleCardClick(project)}>View Project</button>
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
                    {selectedProject.images.map((image, index)=>(
                        <img key={index} src={image} alt={selectedProject.name} className={styles.popupImage}/>
                    ))}
                </div>
                <a href={selectedProject.url} target="_blank" rel=" noopener noreferrer" className={styles.popupButton}>View on Github</a>
            </div>

        </div>
      )}
    </div>
  );
}
export default Portfolio;