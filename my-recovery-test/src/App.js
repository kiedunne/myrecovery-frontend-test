import React from "react";
import "./App.scss";
import members from "./api.json";
import MemberList from "./components/MemberList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MemberList members={members} />
    </div>
  );
}

export default App;
