import PostText from "../PostText/PostText";
import Button from "../UI/Button/Button";
import Col from "../UI/Col/Col";
import Modal from "../UI/Modal/Modal";
import Row from "../UI/Row/Row";
import Title from "../UI/Title/Title";

const DeleteModal = ({ callback, cancel }) => {
  return (
    <Modal maxWith={320}>
      <Col gap={18} alignItems="flex-end">
        <Title>Delte Comment</Title>
        <PostText>
          Are you sure you want to delete this comment? This will remove the comment and can't be undonne.
        </PostText>
        <Row justifyContent="space-between">
          <Button style={{ background: "var(--grayish-blue)", color: "white" }} onClick={cancel}>
            NO, CANCEL
          </Button>
          <Button style={{ background: "var(--soft-red)", color: "white" }} onClick={callback}>
            YES, DELETE
          </Button>
        </Row>
      </Col>
    </Modal>
  );
};

export default DeleteModal;
