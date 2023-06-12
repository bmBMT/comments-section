import React from "react";
import styles from "./Row.module.css";

const Row = ({ children, ...props }) => {
  return (
    <div style={{...props}} className={styles.row}>
      {children}
    </div>
  );
};

export default Row;
