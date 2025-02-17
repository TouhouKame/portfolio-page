import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./AboutMe.module.css";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.paragraph}>
      <p>{t("aboutMeTxt")}</p>
    </div>
  );
};

export default AboutMe;
