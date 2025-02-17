import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <h4>{t("contactHeader")}</h4>
      <p>simoncraggsmcleanjp@gmail.com | +81 80-6238-9428</p>
    </div>
  );
};

export default Footer;
