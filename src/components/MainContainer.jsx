import React from "react";
import styles from "./mainContainer.module.css";
import hipster from "../assets/image-read-together-desktop.webp";
import check from "../assets/icon-check.svg";
import "../App.css";

const MainContainer = () => {
  return (
    <div className={styles.main_container_wrapper}>
      <div className={styles.main_container}>
        <img src={hipster} alt="reading people" />
        <div className={styles.main_container_content1}>
          <h2 className="text-preset-2">Read together, grow together</h2>
          <div className={styles.main_container_benefits}>
            {[
              "Virtual and in-person meetups for deep-dive discussions",
              "Early access to new tech book releases",
              "Author Q&A sessions with tech thought leaders",
              "Monthly curated tech reads selected by industry experts",
            ].map((benefit, index) => (
              <div key={index} className={styles.main_container_benefits_item}>
                <img src={check} alt="check box" />
                <p className="text-preset-5">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
