import { isMobile } from "react-device-detect";
import styles from "./PostScoreCounter.module.css";
import iconPlus from "../../assets/icons/icon-plus.svg";
import iconMinus from "../../assets/icons/icon-minus.svg";
import { useState } from "react";

const PostScoreCounter = ({ score }) => {
  const styled = isMobile
    ? { flexDirection: "row", padding: "10px 14px", gap: 20 }
    : { flexDirection: "column", padding: "14px 16px", height: "fit-content" };

  const [postScore, setPostScore] = useState(score);
  const [plusIconClass, setPlusIconClass] = useState("");
  const [minusIconClass, setMinusIconClass] = useState("");

  function increment() {
    setPostScore((value) => value + 1);
  }

  function decrement() {
    setPostScore((value) => value - 1);
  }

  function onMouseEnter(callback) {
    callback("changer");
  }

  function onMouseLeave(callback) {
    callback("");
  }

  return (
    <div style={{ ...styled }} className={styles.counter}>
      <button
        onMouseEnter={() => onMouseEnter(setPlusIconClass)}
        onMouseLeave={() => onMouseLeave(setPlusIconClass)}
        onClick={increment}
        className={styles.changer}
      >
        <img src={iconPlus} className={plusIconClass} />
      </button>
      <div className={styles.count}>{postScore}</div>
      <button
        onMouseEnter={() => onMouseEnter(setMinusIconClass)}
        onMouseLeave={() => onMouseLeave(setMinusIconClass)}
        onClick={decrement}
        className={styles.changer}
      >
        <img src={iconMinus} className={minusIconClass} />
      </button>
    </div>
  );
};

export default PostScoreCounter;
