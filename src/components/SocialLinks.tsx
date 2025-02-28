import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./SocialLinks.module.css";

interface SocialLinksProps {}

const SocialLinks: FC<SocialLinksProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.linksDiv}>
      <h2>{t("socialHeader")}</h2>
      <h4>{t("socialBody")}</h4>
      <p>
        <a href="https://github.com/TouhouKame">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/simon-craggs-mclean/">LinkedIn</a>
      </p>
    </div>
  );
};

export default SocialLinks;
