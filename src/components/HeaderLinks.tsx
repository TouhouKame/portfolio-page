import { FC } from "react";
import projects from "../projects.json";
import HeaderLink from "./HeaderLink";

import styles from "./HeaderLinks.module.css";

interface HeaderLinksProps {}

const HeaderLinks: FC<HeaderLinksProps> = ({}) => {
  return (
    <div className={styles.linksBox}>
      {projects.map((project, index) => (
        <HeaderLink key={index} children={project.title} link={project.link} />
      ))}
    </div>
  );
};

export default HeaderLinks;
