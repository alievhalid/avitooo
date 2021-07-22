import React from 'react'

function ModalComments(props) {
    return (
        <div className="comment">
            <div className="comments-date">{props.comment.text ? props.comment.date : '(вы ничего не вводили)'}</div>
            <div>
                <div>{props.comment.text}</div>
            </div>
            <div>
                {props.comment.name}
            </div>
        </div>
    )
}

export default ModalComments
