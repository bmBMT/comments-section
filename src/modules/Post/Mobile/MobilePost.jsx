import Wrapper from "../../../components/UI/Wrapper/Wrapper";
import Col from "../../../components/UI/Col/Col";
import PostAuthor from "../../../components/PostAuthor/PostAuthor";
import PostText from "../../../components/PostText/PostText";
import Row from "../../../components/UI/Row/Row";
import PostScoreCounter from "../../../components/PostScoreCounter/PostScoreCounter";
import PostReply from "../../../components/PostReply/PostReply";
import EditForm from "../../../components/EditForm/EditForm";
import MyPostActions from "../../../components/MyPostActions/MyPostActions";
import convertToPostText from "../../../utils/convertToPostText";
import ReactHtmlParser from 'react-html-parser'

const MobilePost = ({ comment, setIsReplying, isYou, stopEdit, edit, deleteMyComment, isEditing }) => {
  const text = convertToPostText(comment.content);

  return (
    <Wrapper>
      <Col gap={12}>
        <PostAuthor
          avatar={comment.user.image}
          username={comment.user.username}
          createdAt={comment.createdAt}
          isYou={isYou}
        />
        {!isEditing && <PostText>{text}</PostText>}
        {isEditing && <EditForm comment={comment} cancelCallback={stopEdit} />}
        <Row justifyContent="space-between">
          <PostScoreCounter score={comment.score} id={comment.id} />
          {!isYou && <PostReply setIsReplying={setIsReplying} />}
          {isYou && <MyPostActions deleteMyComment={deleteMyComment} edit={edit} />}
        </Row>
      </Col>
    </Wrapper>
  );
};

export default MobilePost;
