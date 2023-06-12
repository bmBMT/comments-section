import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import editIcon from "../../assets/icons/icon-edit.svg";

const EditButton = ({ callback }) => {
  return (
    <PrimaryButton onClick={callback} style={{ color: "var(--moderate-blue)", gap: 5 }}>
      <img src={editIcon} alt="editIcon" />
      <span>Edit</span>
    </PrimaryButton>
  );
};

export default EditButton;
