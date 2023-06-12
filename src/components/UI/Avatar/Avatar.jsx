import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ img }) => {
  return <img src={img} className={styles.avatar} alt="" />;
};

export default Avatar;
