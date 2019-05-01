import React from "react";
import "./App.scss";
import members from "./api.json";
import MemberList from "./components/MemberList";

function App() {
  console.log(members);
  return (
    <div className="App">
      <MemberList members={members} />
    </div>
  );
}

export default App;
