import React from "react";
import Heading from "./Heading.jsx";
import List from "./List.jsx";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <br />
      <h1>Nueva Lista</h1>
      <br />
      <List />
    </div>
  );
}

export default App;
