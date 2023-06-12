import Col from "../UI/Col/Col";
import styles from "./ReplyPosts.module.css";
import { isMobile } from "react-device-detect";

const ReplyPosts = ({ children }) => {
  const separatorStyle = isMobile ? "mobileSeparator" : "desktopSeparator";
  const repliesStyle = isMobile ? "mobileReplies" : "desktopReplies";

  return (
    <div className={styles.replys}>
      <div className={`${styles.separator} ${separatorStyle}`}></div>
      <Col classes={repliesStyle} gap={18}>
        {children}
      </Col>
    </div>
  );
};

export default ReplyPosts;
