import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Project.module.css";

interface ProjectProps {
  title: string;
  description: string;
  screenshot: string;
  link: string;
}

const Project: FC<ProjectProps> = ({
  title,
  description,
  screenshot,
  link,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.box}>
      <img src={screenshot} />
      <div className={styles.innerBox}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p>{description}</p>
        <p>
          <a href={link}>{t("projectLink")}</a>
        </p>
      </div>
    </div>
  );
};

export default Project;
