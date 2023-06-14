import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { addComment, addReplyComment } from "../../store/slices/commentsSlice";
import { Comment, ReplyComment } from "../../utils/Comment";
import { isMobile } from "react-device-detect";
import MobileForm from "./Mobile/MobileForm";
import DesktopForm from "./Desktop/DesktopForm";

const PostForm = ({ isReply = false, replyComment = {}, setIsReplying }) => {
  const textRef = useRef();
  const user = useSelector((state) => state.user.user);
  const commentsCount = useSelector((state) => state.comments.count);
  const dispatch = useDispatch();
  const addPost = isReply ? addReplyPost : addNewPost;
  const type = isReply ? "REPLY" : "SEND";
  const replyingTo = replyComment?.user?.username;

  function addNewPost() {
    const post = new Comment();
    post.id = commentsCount + 1;
    post.content = textRef.current.value;
    post.user = user;
    post.ownCommentId = post.id;

    textRef.current.value = "";

    dispatch(addComment(JSON.stringify(post)));
  }

  function addReplyPost() {
    const post = new ReplyComment();
    post.id = commentsCount + 1;
    post.content = textRef.current.value;
    post.replyingTo = replyingTo;
    post.ownCommentId = replyComment.ownCommentId;
    post.user = user;
    textRef.current.value = "";

    dispatch(addReplyComment(JSON.stringify(post)));
    cancelCallback();
  }

  function cancelCallback() {
    setIsReplying(false);
  }

  if (isMobile) {
    return (
      <MobileForm
        textRef={textRef}
        img={user.image}
        addPost={addPost}
        type={type}
        isReply={isReply}
        replyingTo={replyingTo}
        cancelCallback={cancelCallback}
      />
    );
  } else {
    return (
      <DesktopForm
        textRef={textRef}
        img={user.image}
        addPost={addPost}
        type={type}
        isReply={isReply}
        replyingTo={replyingTo}
        cancelCallback={cancelCallback}
      />
    );
  }
};

export default PostForm;
