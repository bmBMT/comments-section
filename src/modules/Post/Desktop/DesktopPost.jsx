import React, { useState } from "react";
import Wrapper from "../../../components/UI/Wrapper/Wrapper";
import Row from "../../../components/UI/Row/Row";
import PostScoreCounter from "../../../components/PostScoreCounter/PostScoreCounter";
import Col from "../../../components/UI/Col/Col";
import PostAuthor from "../../../components/PostAuthor/PostAuthor";
import PostReply from "../../../components/PostReply/PostReply";
import PostText from "../../../components/PostText/PostText";
import EditForm from "../../../components/EditForm/EditForm";
import MyPostActions from "../../../components/MyPostActions/MyPostActions";
import ReactHtmlParser from 'react-html-parser'
import convertToPostText from "../../../utils/convertToPostText";

const DesktopPost = ({ comment, setIsReplying, isYou, stopEdit, edit, deleteMyComment, isEditing }) => {
  const text = convertToPostText(comment.content);

  return (
    <Wrapper>
      <Row gap={24}>
        <PostScoreCounter score={comment.score} />
        <Col gap={12}>
          <Row justifyContent="space-between">
            <PostAuthor
              avatar={comment.user.image}
              username={comment.user.username}
              createdAt={comment.createdAt}
              isYou={isYou}
            />
            {!isYou && <PostReply setIsReplying={setIsReplying} />}
            {isYou && <MyPostActions deleteMyComment={deleteMyComment} edit={edit} />}
          </Row>
          {!isEditing && <PostText>{text}</PostText>}
          {isEditing && <EditForm comment={comment} cancelCallback={stopEdit} />}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DesktopPost;
