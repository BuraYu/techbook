import React from "react";
import arrowDown from "../assets/icon-arrow-up.svg";
import style from "./alternateButton.module.css";

const AlternateButton = ({ title }) => {
  return (
    <button className={style.p_button_container} aria-label={title}>
      <span className="text-preset-6">{title}</span>
      <img src={arrowDown} alt="arrow down image" />
    </button>
  );
};

export default AlternateButton;
