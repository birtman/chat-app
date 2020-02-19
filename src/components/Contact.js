import React, { Component } from "react";
import "./Contact.css";
import { render } from "@testing-library/react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    };
  }

  render() {
    return (
      <div className="Contact">
        <img
          className="avatar"
          src={this.props.nameavatar}
          alt={this.props.name}
        />
        <h4 className="name">{this.props.name}</h4>
        <p className="status">
          <span
            className={this.state.online ? "status-offline" : "status-online"}
            onClick={event => {
              const nowOffline = !this.state.online;
              this.setState({ online: nowOffline });
            }}
          ></span>
          {this.props.status}
        </p>
      </div>
    );
  }
}

export default Contact;
