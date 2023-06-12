import React from "react";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import cancelIcon from "../../assets/icons/icon-xmark.svg";

const CancelButton = ({ cancelCallback }) => {
  return (
    <PrimaryButton onClick={cancelCallback} style={{ alignItems: "center", gap: 2 }} type="cancel">
      <img className="cancel" src={cancelIcon} alt="cancelIcon" />
      <span>Cancel</span>
    </PrimaryButton>
  );
};

export default CancelButton;
