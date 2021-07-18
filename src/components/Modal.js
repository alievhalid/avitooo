import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router-dom";
import { loadModal } from "../redux/actions";
import modal from "../redux/modal";
import ModalComments from "./ModalComments";
import ModalPhoto from "./ModalPhoto";

function Modal() {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const comments = useSelector((state) => state.modal.comments);

  useEffect(() => {
    dispatch(loadModal(id));
  }, [id]);

  return (
    <div className="modal-background">
      <div className="comments">
        {comments.map((Comment) => {
          <ModalComments comment={Comment} />;
        })}
        <ModalPhoto />
        <ModalComments />
      </div>
    </div>
  );
}

export default Modal;
