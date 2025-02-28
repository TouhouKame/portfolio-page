import { FC } from "react";

import styles from "./HeaderLink.module.css";

interface HeaderLinkProps {
  children: string;
  link: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ children, link }) => {
  return (
    <p className={styles.link}>
      <a href={link}>{children}</a>
    </p>
  );
};

export default HeaderLink;
