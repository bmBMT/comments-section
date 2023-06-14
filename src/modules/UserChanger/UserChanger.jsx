import { useSelector } from "react-redux";
import Collapse from "../../components/UI/Collapse/Collapse";
import changeIcon from "../../assets/icons/icon-changeUser.svg";
import Row from "../../components/UI/Row/Row";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/slices/userSlice";
import { useState } from "react";

const UserChanger = () => {
  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);
  const filteredUsers = users.filter((anotherUser) => anotherUser.username !== user.username);
  const preview = <img src={user.image} alt="" />;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  function changeActive() {
    setIsActive((prev) => !prev);
  }

  function onClick(user) {
    dispatch(changeUser(user));
    setIsActive(false);
  }

  return (
    <Collapse isActive={isActive} changeActive={changeActive} toggle={preview}>
      <Row gap={12}>
        <img src={changeIcon} alt="" />
        {filteredUsers.map((user) => (
          <img
            key={user.username}
            onClick={() => onClick(user)}
            src={user.image}
            style={{ cursor: "pointer" }}
            alt=""
          />
        ))}
      </Row>
    </Collapse>
  );
};

export default UserChanger;
