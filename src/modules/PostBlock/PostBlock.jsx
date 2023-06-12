import ReplyPosts from "../../components/ReplyPosts/ReplyPosts";
import Post from "../Post/Post";

const PostBlock = ({ comment }) => {
  return (
    <>
      <Post comment={comment} />
      {comment.replies.length ? (
        <ReplyPosts>
          {comment.replies.map((comment) => (
            <Post key={comment.id} comment={comment} />
          ))}
        </ReplyPosts>
      ) : (
        ""
      )}
    </>
  );
};

export default PostBlock;
