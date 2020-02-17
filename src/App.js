import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Meghan James"
        status="online"
        nameavatar="https://randomuser.me/api/portraits/women/27.jpg"
      />
      <Contact
        name="Meghan James"
        status="offline"
        nameavatar="https://randomuser.me/api/portraits/women/27.jpg"
      />

      <Contact
        name="Meghan James"
        status="online"
        nameavatar="https://randomuser.me/api/portraits/women/27.jpg"
      />
    </div>
  );
}

export default App;
