import PostForm from "./modules/PostForm/PostForm";
import PostBlock from "./modules/PostBlock/PostBlock";
import { useSelector } from "react-redux";
import UserChanger from "./modules/UserChanger/UserChanger";

const App = () => {
  const comments = useSelector((state) => state.comments.comments);

  return (
    <div className="app">
      <UserChanger />
      {comments.map((comment) => (
        <PostBlock key={comment.id} comment={comment} />
      ))}
      <PostForm />
    </div>
  );
};

export default App;
