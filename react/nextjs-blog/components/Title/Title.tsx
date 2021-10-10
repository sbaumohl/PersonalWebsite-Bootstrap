import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { skills, resumeProjects, headerLinks } from "../../lib/resume";
import styles from "./Title.module.scss";

const links = [];
for (const link of headerLinks) {
  links.push(
    <div>
      <a
        href={link.link}
        type="button"
        target="_blank"
        rel="noopener"
        key={link.link}
      >
        <FontAwesomeIcon icon={link.icon} size="2x"></FontAwesomeIcon>
      </a>
    </div>
  );
}

export default class TitleHeader extends React.Component {
  componentDidMount() {
    document.getElementById("__next").classList.add("canvas");
  }

  componentWillUnmount() {
    document.getElementById("__next").classList.remove("canvas");
  }

  render() {
    return (
      <>
        <div className={styles.nameHeader}>
          <div className={styles.headerChild}>
            <h1>SamBaumohl.com</h1>
            <h4>Sam Baumohl is a full-stack developer from Missouri.</h4>
            <div aria-label="Site Links" className={styles.siteLinksGroup}>
              {links}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <hr className={styles.line} />
        </div>
      </>
    );
  }
}
