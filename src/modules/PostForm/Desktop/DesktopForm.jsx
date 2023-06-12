import Wrapper from "../../../components/UI/Wrapper/Wrapper";
import Row from "../../../components/UI/Row/Row";
import Avatar from "../../../components/UI/Avatar/Avatar";
import Textarea from "../../../components/UI/Textarea/Textarea";
import Button from "../../../components/UI/Button/Button";
import Col from "../../../components/UI/Col/Col";
import CancelButton from "../../../components/CancelButton/CancelButton";
import handleKeyDown from "../../../utils/handleKeyDown";

const DesktopForm = ({ replyingTo, textRef, img, addPost, isReply, cancelCallback, type }) => {
  const defaultValue = replyingTo ? `@${replyingTo}, ` : "";

  return (
    <Wrapper>
      <Row gap={12}>
        <Avatar img={img} />
        <Textarea ref={textRef} defaultValue={defaultValue} placeholder="Add a comment..." onKeyDown={e => handleKeyDown(e, addPost)} />
        <Col width="fit-content" gap={12}>
          <Button onClick={addPost}>{type}</Button>
          {isReply && <CancelButton cancelCallback={cancelCallback} />}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DesktopForm;
