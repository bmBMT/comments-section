import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import deleteIcon from "../../assets/icons/icon-delete.svg";

const DeleteButton = ({ callback }) => {
  return (
    <PrimaryButton onClick={callback} style={{ color: "var(--soft-red)", gap: 5 }}>
      <img src={deleteIcon} alt="editIcon" />
      <span>Delete</span>
    </PrimaryButton>
  );
};

export default DeleteButton;
