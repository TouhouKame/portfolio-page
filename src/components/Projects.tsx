import { FC } from "react";
import projects from "../projects.json";
import Project from "./Project";
import { useTranslation } from "react-i18next";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={t(`project${index + 1}.description`)}
          link={project.link}
          screenshot={project.imageRoute}
        />
      ))}
    </div>
  );
};

export default Projects;
