import React from "react";
import members from "./api.json";
import MemberList from "./components/MemberList";

function App() {
  return (
    <div className="App">
      <MemberList members={members} />
    </div>
  );
}

export default App;
