import React, { useEffect } from "react";
import styles from "./Portfolio.module.css";

type project = {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    githubLink: string;
    imageUrls: string[];
}


function Portfolio() {
    const [projects, setProjects] = React.useState<project[]>([]);
    const [selectedProject, setSelectedProject] = React.useState<project | null>(null);

    useEffect(()=>{
        const fetchProjects = async () => {
            try {
                const responce =  await fetch ("http://localhost:8080/api/portfolio");
                if(!responce.ok){
                    throw new Error("failed to fetch data");
                    
                }
                const data = await responce.json();
                setProjects(data);
                console.log(projects);
            } catch (error) {
                console.log("Error fetching projects", error)
            }
        
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
                    <button className={styles.cardButton} onClick={()=>handleCardClick(project)}>View Details</button>
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
                    {selectedProject.imageUrls.map((image, index)=>(
                        <img key={index} src={image} alt={selectedProject.name} className={styles.popupImage}/>
                    ))}
                </div>
                <a href={selectedProject.githubLink} target="_blank" rel=" noopener noreferrer" className={styles.popupButton}>View on Github</a>
            </div>

        </div>
      )}
    </div>
  );
}
export default Portfolio;