import React from "react";
import styles from "./Collapse.module.css";
import { useState } from "react";

const Collapse = ({ children, toggle, isActive, changeActive }) => {
  return (
    <div className={styles.collapse} style={{ width: isActive ? "100%" : 40 }}>
      <div className={styles.preview} onClick={changeActive}>
        {toggle}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Collapse;
