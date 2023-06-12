import styles from "./PostAuthor.module.css";
import Avatar from "../UI/Avatar/Avatar";
import UserIdentifier from "../UI/UserIdentifier/UserIdentifier";

const PostAuthor = ({ avatar, username, createdAt, isYou }) => {
  return (
    <div className={styles.authorPost}>
      <Avatar img={avatar} />
      <div className={styles.author}>
        {username} {isYou && <UserIdentifier />}
      </div>
      <div className={styles.postPublished}>{createdAt}</div>
    </div>
  );
};

export default PostAuthor;
