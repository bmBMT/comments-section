import Avatar from "../../../components/UI/Avatar/Avatar";
import Button from "../../../components/UI/Button/Button";
import Col from "../../../components/UI/Col/Col";
import Row from "../../../components/UI/Row/Row";
import Textarea from "../../../components/UI/Textarea/Textarea";
import Wrapper from "../../../components/UI/Wrapper/Wrapper";
import CancelButton from "../../../components/CancelButton/CancelButton";
import usePostEnter from "../../../utils/handleKeyDown";

const MobileForm = ({ replyingTo, textRef, img, addPost, isReply, cancelCallback, type }) => {
  const defaultValue = replyingTo ? `@${replyingTo}, ` : "";
  const handleKeyDown = usePostEnter(addPost);

  return (
    <Wrapper>
      <Col gap={12}>
        <Textarea ref={textRef} defaultValue={defaultValue} placeholder="Add a comment..." onKeyDown={handleKeyDown} />
        <Row justifyContent="space-between" alignItems="center">
          <Avatar img={img} />
          <Row width="fit-content" alignItems="center" gap={16}>
            {isReply && <CancelButton cancelCallback={cancelCallback} />}
            <Button onClick={addPost}>{type}</Button>
          </Row>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default MobileForm;
