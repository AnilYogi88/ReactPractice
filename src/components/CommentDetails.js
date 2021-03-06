import React from "react";
// import faker from "faker";


const CommentDetails = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}></img>
            </a>
            <div className="content">
                <a href="/" className="aurthor">
                    {props.authorName}
                </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    )
}

export default CommentDetails;