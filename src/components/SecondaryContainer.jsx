import React from "react";
import "../App.css";
import styles from "./secondaryContainer.module.css";
import notAverageReaders from "../assets/image-not-average-desktop.webp";
import circle from "../assets/pattern-circle.png";
import techLogos from "../assets/logos-tech.svg";

const SecondaryContainer = () => {
  return (
    <div className={styles.second_container_wrapper}>
      <div className={styles.second_container}>
        <div className={styles.second_container_content}>
          <h2 className="text-preset-2">
            Not your average book club{" "}
            <img src={circle} alt="Circle decoration" />
          </h2>
          <p className="text-preset-5">
            Connect with a community that speaks your language - from{" "}
            <strong>Python</strong> to <strong>TypeScript</strong> and
            everything in between. Our discussions blend technical depth with
            practical applications.
          </p>
        </div>
        <img src={notAverageReaders} alt="People enjoying books" />
        <img src={techLogos} alt="" />
      </div>
    </div>
  );
};

export default SecondaryContainer;
