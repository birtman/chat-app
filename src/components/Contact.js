import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.nameavatar} alt={props.name} />
      <h4 className="name">{props.name}</h4>
      <p className="status">
        <span
          className={
            props.status === "online" ? "status-online" : "status-offline"
          }
        ></span>
        {props.status}
      </p>
    </div>
  );
}

export default Contact;
