import React from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import style from "./primaryButton.module.css";

const PrimaryButton = ({ title }) => {
  return (
    <button className={style.p_button_container} aria-label={title}>
      <span className="text-preset-6">{title}</span>
      <img src={arrowDown} alt="arrow down image" />
    </button>
  );
};

export default PrimaryButton;
