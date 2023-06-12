import React, { useState } from "react";
import Row from "../UI/Row/Row";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import DeleteModal from "../DeleteModal/DeleteModal";

const MyPostActions = ({ deleteMyComment, edit }) => {
  const [isModal, seIsModal] = useState(false);

  function getAgreeDelete() {
    seIsModal(true);
  }

  function cancel() {
    seIsModal(false);
  }

  return (
    <Row width="fit-content" gap={24} flexWrap="wrap" justifyContent="center">
      {isModal && <DeleteModal callback={deleteMyComment} cancel={cancel} />}
      <DeleteButton callback={getAgreeDelete} />
      <EditButton callback={edit} />
    </Row>
  );
};

export default MyPostActions;
