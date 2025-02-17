import { FC } from "react";
import HeaderLinks from "./HeaderLinks";
import TranslateButton from "./TranslateButton";

import styles from "./Header.module.css";

import { useTranslation } from "react-i18next";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h1>{t("title")}</h1>

      <HeaderLinks />

      <TranslateButton />
    </header>
  );
};

export default Header;
