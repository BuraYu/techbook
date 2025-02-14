import React from "react";
import "../App.css";
import styles from "./hero.module.css";
import logo from "../assets/logo.svg";
import PrimaryButton from "./PrimaryButton";
import happyCustomers from "../assets/image-avatars.webp";
import star from "../assets/icon-star.svg";
import heroImg from "../assets/image-hero-desktop.webp";
import glow from "../assets/pattern-glow.svg";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <img src={glow} alt="glowing effect on the background" />
      <div className={styles.hero_wrapper}>
        <div className={styles.navbar_container}>
          <img src={logo} alt={logo} />
        </div>
        <div className={styles.hero_content}>
          <div className={styles.hero_text}>
            <h1 className={`text-preset-1 ${styles.hero_header}`}>
              Join the ultimate tech book club
            </h1>
            <p className="text-preset-5">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <PrimaryButton title={"review membership options"} />
            <div className={styles.testimonial_container}>
              <img
                src={happyCustomers}
                alt="Profile pictures of happy customers"
              />
              <div className={styles.rating_container}>
                <div className={styles.star_container}>
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                </div>
                <span className="text-preset-7">
                  200+ developers joined already
                </span>
              </div>
            </div>
          </div>
          <img src={heroImg} alt="" className={styles.imgImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
