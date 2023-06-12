import styles from "./PostReply.module.css";
import iconReply from "../../assets/icons/icon-reply.svg";

const PostReply = ({ setIsReplying }) => {
  function reply() {
    setIsReplying(true)
  }
  
  return (
    <div onClick={reply} className={styles.reply}>
      <img src={iconReply} className={styles.replyIcon} alt="" />
      <span className={styles.replyText}>Reply</span>
    </div>
  );
};

export default PostReply;
