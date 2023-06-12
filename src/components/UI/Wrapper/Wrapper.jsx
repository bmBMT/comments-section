import styles from "./Wrapper.module.css";
import { isMobile } from "react-device-detect";

const Wrapper = ({ children, ...props }) => {
  const padding = isMobile ? 14 : 24;

  return (
    <div style={{ padding }} className={styles.wrapper} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
