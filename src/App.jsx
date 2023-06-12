import PostForm from "./modules/PostForm/PostForm";
import PostBlock from "./modules/PostBlock/PostBlock";
import { useSelector } from "react-redux";

const App = () => {
  const comments = useSelector((state) => state.comments.comments);

  return (
    <div className="app">
      {comments.map((comment) => (
        <PostBlock key={comment.id} comment={comment} />
      ))}
      <PostForm />
    </div>
  );
};

export default App;
