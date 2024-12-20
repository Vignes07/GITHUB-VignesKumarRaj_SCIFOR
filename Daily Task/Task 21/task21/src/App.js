import React from "react";
import Person from "./Person";

function App() {
  return (
    <div>
      <h1>Person Information</h1>
      <Person name="John Doe" age={30} hobby="Reading" />
    </div>
  );
}

export default App;
