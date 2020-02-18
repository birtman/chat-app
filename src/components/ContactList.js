import React from "react";
import "./Contact.css";
import Contact from "./Contact";

const users = [
  {
    name: "Meghan James",
    status: "online",
    nameavatar: "https://randomuser.me/api/portraits/women/27.jpg"
  },
  {
    name: "Cindy Howard",
    status: "offline",
    nameavatar: "https://randomuser.me/api/portraits/women/52.jpg"
  },
  {
    name: "Marion Grant",
    status: "online",
    nameavatar: "https://randomuser.me/api/portraits/women/40.jpg"
  }
];

const ContactList = () => (
  <div>
    {users.map(item => (
      <Contact
        name={item.name}
        status={item.status}
        nameavatar={item.nameavatar}
      />
    ))}
  </div>
);

export default ContactList;
