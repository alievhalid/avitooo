import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loadModal } from "../redux/actions";
import ModalComments from "./ModalComments";
import ModalPhoto from "./ModalPhoto";
import { addComments } from "../redux/actions";

function Modal() {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const comments = useSelector((state) => state.modal.comments);
  console.log(comments);

  const [text, setText] = useState('')
  const [name, setName] = useState('')

  const handleAddName = (e) => {
    setName(e.target.value)
  }
  const handleAddComment = (e) => {
    setText(e.target.value)
  }
  const addComment = (id, name, text) => {
    dispatch(addComments(id, name, text));
    setText('');
    setName('');
  }
  useEffect(() => {
    dispatch(loadModal(id));
  }, [id]);

  return (
    <div className="modal-background ">
      <div className="modal">
        <div className="left-block">
          <ModalPhoto />
          <div className="inputs">
            <div>
              <input
                type="text"
                placeholder="ваше имя"
                value={name}
                onChange={handleAddName}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="ваш комментарий"
                value={text}
                onChange={handleAddComment}
              />
            </div>
            <button onClick={() => addComment(id, name, text)}>
              Оставить комментарий
            </button>
          </div>
        </div>

        <div className="comments">
          {comments.map(comment => {
            return <ModalComments key={id} comment={comment} />
          })}
        </div>
        <Link to={'/'}>
          <div className="close">X</div>
        </Link>

      </div>
    </div>
  );
}

export default Modal;
