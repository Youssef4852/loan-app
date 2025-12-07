import React from "react";
import "./Modal.css";
function Modal({isClicked, title, className}) {
  if (isClicked) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h1 className={className}>{title}</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
