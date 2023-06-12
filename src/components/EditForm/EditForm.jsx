import React, { useRef } from "react";
import Col from "../UI/Col/Col";
import Textarea from "../UI/Textarea/Textarea";
import Row from "../UI/Row/Row";
import CancelButton from "../CancelButton/CancelButton";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { changeCommentContent } from "../../store/slices/commentsSlice";
import handleKeyDown from "../../utils/handleKeyDown";

const EditForm = ({ comment, cancelCallback }) => {
  const textRef = useRef();
  const dispatch = useDispatch();

  function saveComment() {
    const content = textRef.current.value;
    dispatch(changeCommentContent({ comment, content }));
    cancelCallback();
  }

  return (
    <Col alignItems="end" gap={16}>
      <Textarea
        ref={textRef}
        style={{ height: 120 }}
        defaultValue={comment.content}
        onKeyDown={(e) => handleKeyDown(e, saveComment)}
      />
      <Row width="fit-content" alignItems="center" gap={24}>
        <CancelButton cancelCallback={cancelCallback} />
        <Button onClick={saveComment}>UPDATE</Button>
      </Row>
    </Col>
  );
};

export default EditForm;
