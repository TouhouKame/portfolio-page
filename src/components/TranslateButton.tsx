import { FC } from "react";

import styles from "./TranslateButton.module.css";
import { useTranslation } from "react-i18next";

interface TranslateButtonProps {}

const TranslateButton: FC<TranslateButtonProps> = ({}) => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.btnTranslate}>
      <label>{t("selectLabel")}</label>
      <select className={styles.dropDown} onChange={onChangeLanguage}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
};

export default TranslateButton;
