import { useState } from "react";
import PostForm from "../PostForm/PostForm";
import DesktopPost from "./Desktop/DesktopPost";
import MobilePost from "./Mobile/MobilePost";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/slices/commentsSlice";

const Post = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const user = useSelector((state) => state.user);
  const isYou = user.username === comment.user.username;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  function deleteMyComment() {
    dispatch(deleteComment(comment));
  }

  function edit() {
    setIsEditing(true);
  }

  function stopEdit() {
    setIsEditing(false);
  }

  if (isMobile) {
    return (
      <>
        <MobilePost
          comment={comment}
          setIsReplying={setIsReplying}
          isYou={isYou}
          deleteMyComment={deleteMyComment}
          edit={edit}
          stopEdit={stopEdit}
          isEditing={isEditing}
        />
        {isReplying && (
          <PostForm isReply={true} replyComment={comment} setIsReplying={setIsReplying} />
        )}
      </>
    );
  } else {
    return (
      <>
        <DesktopPost
          comment={comment}
          setIsReplying={setIsReplying}
          isYou={isYou}
          deleteMyComment={deleteMyComment}
          edit={edit}
          stopEdit={stopEdit}
          isEditing={isEditing}
        />
        {isReplying && (
          <PostForm isReply={true} replyComment={comment} setIsReplying={setIsReplying} />
        )}
      </>
    );
  }
};

export default Post;
