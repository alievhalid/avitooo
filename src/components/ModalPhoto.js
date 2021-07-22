import React from "react";
import { useSelector } from "react-redux";

function ModalPhoto() {
  const modalImage = useSelector((state) => state.modal.modalImage);
  return (
    <div className="modal-img">
      <img src={modalImage.url} alt="" />
    </div>
  );
}

export default ModalPhoto;
